// Importando as dependências utilizando sintaxe ES Modules (ideal em projetos TypeScript)
import express from 'express';
import xmlbuilder from 'xmlbuilder';

// Cria a aplicação Express
const app = express();

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

/**
 * Endpoint para emissão de NF-e
 * Exemplo de payload JSON:
 * {
 *   "saleId": 123,
 *   "product": { "codigo": "PROD001", "nome": "Produto Teste" },
 *   "buyer": { "cpf": "12345678901", "nome": "Cliente Exemplo" },
 *   "total": 150.75
 * }
 */
app.post('/emitir-nfe', (req, res) => {
  const { saleId, product, buyer, total } = req.body;

  // Validação simples dos dados recebidos
  if (!saleId || !product || !buyer || !total) {
    return res.status(400).json({ error: 'Dados insuficientes para gerar a NF-e.' });
  }

  // Construindo o XML da NF-e (layout simplificado)
  const nfeXML = xmlbuilder.create('NFe', { encoding: 'utf-8' })
    .ele('infNFe', { Id: 'NFe' + saleId, versao: '4.00' })
      .ele('ide')
        .ele('cUF', '35').up()                   // Código da UF (ex.: 35 para São Paulo)
        .ele('natOp', 'Venda').up()              // Natureza da operação
        .ele('mod', '55').up()                   // Modelo NF-e
        .ele('serie', '1').up()                  // Série
        .ele('nNF', saleId.toString()).up()      // Número da NF-e
      .up()
      .ele('emit')
        .ele('CNPJ', '00000000000191').up()      // CNPJ do emitente (exemplo)
        .ele('xNome', 'Empresa Emitente').up()   // Nome do emitente
      .up()
      .ele('dest')
        .ele('CPF', buyer.cpf).up()              // CPF do destinatário
        .ele('xNome', buyer.nome).up()           // Nome do destinatário
      .up()
      .ele('det', { nItem: '1' })
        .ele('prod')
          .ele('cProd', product.codigo).up()     // Código do produto
          .ele('xProd', product.nome).up()       // Nome do produto
          .ele('vProd', total.toFixed(2)).up()     // Valor do produto
        .up()
      .up()
    .up();

  // Finalizando o XML com formatação bonita
  const xmlString = nfeXML.end({ pretty: true });

  // NOTA: Em um ambiente real você precisará:
  // 1. Assinar o XML utilizando certificado digital (ex.: com a biblioteca xml-crypto);
  // 2. Transmitir o XML assinado para a SEFAZ ou para uma API de emissão de NF-e;
  // 3. Tratar e registrar as respostas e possíveis erros.
  
  res.set('Content-Type', 'application/xml');
  res.send(xmlString);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor NF-e rodando na porta 3000');
});
