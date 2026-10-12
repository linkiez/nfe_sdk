import type { NFCeAuthorizationOutcome } from '../../../src/canonical/nfce/contracts.js';

const ACCESS_KEY = '35260512345678000123650020000004561876543219';
const QR_CODE_BASE_URLS = {
  homologation:
    'https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
  production:
    'https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
} as const;

/**
 * Builds sanitized SP authorization evidence with a matching NFC-e and SOAP response.
 *
 * @param environment - SP authorization environment represented by the fixture.
 * @returns Authorized outcome suitable for DANFE renderer tests.
 */
export function buildSPDanfeAuthorizationOutcome(
  environment: 'homologation' | 'production' = 'production',
): NFCeAuthorizationOutcome {
  const tpAmb = environment === 'production' ? '1' : '2';
  const protocolNumber =
    environment === 'production' ? '13526000000000001' : '135190000000001';
  const requestEnvelopeXml = `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe"><NFe xmlns="http://www.portalfiscal.inf.br/nfe"><infNFe Id="NFe${ACCESS_KEY}" versao="4.00"><ide><cUF>35</cUF><cNF>87654321</cNF><natOp>VENDA</natOp><mod>65</mod><serie>2</serie><nNF>456</nNF><dhEmi>2026-05-20T10:30:00-03:00</dhEmi><tpNF>1</tpNF><idDest>1</idDest><cMunFG>3550308</cMunFG><tpImp>4</tpImp><tpEmis>1</tpEmis><cDV>9</cDV><tpAmb>${tpAmb}</tpAmb><finNFe>1</finNFe><indFinal>1</indFinal><indPres>1</indPres><procEmi>0</procEmi><verProc>nfe-sdk-test</verProc></ide><emit><CNPJ>12345678000123</CNPJ><xNome>Comercio Teste &amp; Filhos</xNome><enderEmit><xLgr>Rua de Teste</xLgr><nro>100</nro><xBairro>Centro</xBairro><cMun>3550308</cMun><xMun>Sao Paulo</xMun><UF>SP</UF><CEP>01001000</CEP></enderEmit><IE>123456789</IE><CRT>1</CRT></emit><dest><CPF>12345678901</CPF><xNome>Consumidor Entrega</xNome></dest><entrega><xLgr>Avenida da Entrega</xLgr><nro>200</nro><xCpl>Apto 12</xCpl><xBairro>Bela Vista</xBairro><cMun>3550308</cMun><xMun>Sao Paulo</xMun><UF>SP</UF><CEP>01310930</CEP></entrega><det nItem="1"><prod><cProd>SKU-1</cProd><xProd>Cafe &amp; acucar</xProd><NCM>09012100</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>2.0000</qCom><vUnCom>5.00</vUnCom><vProd>10.00</vProd><uTrib>UN</uTrib><qTrib>2.0000</qTrib><vUnTrib>5.00</vUnTrib><indTot>1</indTot></prod></det><det nItem="2"><prod><cProd>SKU-2</cProd><xProd>Biscoito integral pacote familiar</xProd><NCM>19053100</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>10.00</vUnCom><vProd>10.00</vProd><uTrib>UN</uTrib><qTrib>1.0000</qTrib><vUnTrib>10.00</vUnTrib><indTot>1</indTot></prod></det><total><ICMSTot><vBC>0.00</vBC><vICMS>0.00</vICMS><vICMSDeson>0.00</vICMSDeson><vFCP>0.00</vFCP><vBCST>0.00</vBCST><vST>0.00</vST><vFCPST>0.00</vFCPST><vFCPSTRet>0.00</vFCPSTRet><vProd>20.00</vProd><vFrete>0.00</vFrete><vSeg>1.00</vSeg><vDesc>0.00</vDesc><vII>0.00</vII><vIPI>0.00</vIPI><vIPIDevol>0.00</vIPIDevol><vPIS>0.00</vPIS><vCOFINS>0.00</vCOFINS><vOutro>0.00</vOutro><vNF>21.00</vNF><vTotTrib>0.00</vTotTrib></ICMSTot></total><transp><modFrete>9</modFrete></transp><pag><detPag><indPag>0</indPag><tPag>01</tPag><vPag>21.00</vPag></detPag></pag><infAdic><infCpl>Documento de teste.</infCpl></infAdic></infNFe></NFe></nfeDadosMsg></soap:Body></soap:Envelope>`;
  const responseEnvelopeXml = `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retEnviNFe xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>${tpAmb}</tpAmb><cStat>100</cStat><xMotivo>Autorizado o uso da NFC-e</xMotivo><protNFe><infProt><tpAmb>${tpAmb}</tpAmb><chNFe>${ACCESS_KEY}</chNFe><dhRecbto>2026-05-20T10:30:03-03:00</dhRecbto><nProt>${protocolNumber}</nProt><cStat>100</cStat></infProt></protNFe></retEnviNFe></soap:Body></soap:Envelope>`;

  return {
    acceptedForTransport: true,
    classification: 'authorized',
    protocolNumber,
    qrCodeUrl: `${QR_CODE_BASE_URLS[environment]}?p=${ACCESS_KEY}|3|${tpAmb}`,
    transportOutcome: {
      applicationStatusCode: '100',
      applicationStatusMessage: 'Autorizado o uso da NFC-e',
      classification: 'success',
      environment,
      evidence: {
        endpointUrl: QR_CODE_BASE_URLS[environment],
        provider: 'SP',
        requestEnvelopeXml,
        responseEnvelopeXml,
      },
      service: 'nfce-authorization-sp',
    },
    validationFailures: [],
  };
}
