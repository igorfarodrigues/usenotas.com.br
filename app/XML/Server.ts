import express, { Request, Response, RequestHandler } from 'express';
import { gerarNFeXML } from './XMLGenerator';

const app = express();
app.use(express.json());

const emitirNfeHandler: RequestHandler = (req, res): void => {
  const { saleId, product, buyer, total } = req.body;
  
  if (!saleId || !product || !buyer || !total) {
    res.status(400).json({ error: 'Dados insuficientes para gerar a NF-e.' });
    return; // Retorna void
  }
  
  // Gera o XML da NF-e utilizando a função definida
  const xmlString = gerarNFeXML({ saleId, product, buyer, total });
  
  // Nota: Em um ambiente real, deve-se incluir a assinatura digital e a transmissão para a SEFAZ.
  res.set('Content-Type', 'application/xml');
  res.send(xmlString);
};

app.post('/emitir-nfe', emitirNfeHandler);

app.listen(3000, () => {
  console.log('Servidor NF-e rodando na porta 3000');
});
