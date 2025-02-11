import xmlbuilder from 'xmlbuilder';

// Interfaces para tipagem (opcional, mas recomendado para clareza)
interface Product {
  codigo: string;
  nome: string;
}

interface Buyer {
  cpf: string;
  nome: string;
}

interface NFeData {
  saleId: number;
  product: Product;
  buyer: Buyer;
  total: number;
}

// Função que gera o XML da NF-e
export function gerarNFeXML({ saleId, product, buyer, total }: NFeData): string {
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
        .ele('CNPJ', '00000000000191').up()      // Exemplo: CNPJ do emitente
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

  return nfeXML.end({ pretty: true });
}
