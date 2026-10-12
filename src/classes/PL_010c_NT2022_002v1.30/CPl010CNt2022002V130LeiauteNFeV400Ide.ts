import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado } from './CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado';

import { TPl010CNt2022002V130LeiauteNFeV400FinNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400FinNFe';

import { TPl010CNt2022002V130LeiauteNFeV400ProcEmi } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400ProcEmi';

import { TPl010CNt2022002V130LeiauteNFeV400TpNfCredito } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400TpNfCredito';

import { TPl010CNt2022002V130LeiauteNFeV400TpNfDebito } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400TpNfDebito';

/**
 * identificação da NF-e
 */
export class CPl010CNt2022002V130LeiauteNFeV400Ide {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código da UF do emitente do Documento FiscalUtilizar a Tabela do IBGE (Anexo IV - Tabela de UF, Município e País)
     */
    public cUF?: unknown;
    /**
     * Código do modelo do Documento Fiscal Preencher com &quot;2B&quot;, quando se tratar de Cupom Fiscal emitido por máquina registradora (não ECF), com &quot;2C&quot;, quando se tratar de Cupom Fiscal PDV, ou &quot;2D&quot;, quando se tratar de Cupom Fiscal (emitido por ECF)
     */
    public mod?: unknown;
    /**
     * Série do Documento Fiscal, informar zero se inexistentesérie
     */
    public serie?: unknown;
    /**
     * Número do Documento Fiscal - 1 – 999999999
     */
    public nNF?: unknown;
    /**
     * Data e Hora de emissão do Documento Fiscal (AAAA-MM-DDThh:mm:ssTZD) ex.: 2012-09-01T13:00:00-03:00
     */
    public dhEmi?: unknown;
    /**
     * Data e Hora da saída ou de entrada da mercadoria / produto (AAAA-MM-DDTHH:mm:ssTZD)
     */
    public dhSaiEnt?: unknown;
    /**
     * Data da previsão de entrega ou disponibilização do bem (AAAA-MM-DD)
     */
    public dPrevEntrega?: unknown;
    /**
     * Código do Município de Ocorrência do Fato Gerador (utilizar a tabela do IBGE)
     */
    public cMunFG?: unknown;
    /**
     * Informar o município de ocorrência do fato gerador do fato gerador do IBS / CBS. Campo preenchido somente quando “indPres = 5 (Operação presencial, fora do estabelecimento) ”, e não tiver endereço do destinatário (Grupo: E05) ou local de entrega (Grupo: G01).
     */
    public cMunFGIBS?: unknown;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Finalidade da emissão da NF-e: 1 - NFe normal 2 - NFe complementar 3 - NFe de ajuste 4 - Devolução/Retorno 5 - Nota de crédito 6 - Nota de débito
     */
    public finNFe?: TPl010CNt2022002V130LeiauteNFeV400FinNFe;
    /**
     * Tipo de Nota de Débito: 01=Transferência de créditos para Cooperativas; 02=Anulação de Crédito por Saídas Imunes/Isentas; 03=Débitos de notas fiscais não processadas na apuração; 04=Multa e juros; 05=Transferência de crédito de sucessão.
     */
    public tpNFDebito?: TPl010CNt2022002V130LeiauteNFeV400TpNfDebito;
    /**
     * Tipo de Nota de Crédito
     */
    public tpNFCredito?: TPl010CNt2022002V130LeiauteNFeV400TpNfCredito;
    /**
     * Processo de emissão utilizado com a seguinte codificação: 0 - emissão de NF-e com aplicativo do contribuinte; 1 - emissão de NF-e avulsa pelo Fisco; 2 - emissão de NF-e avulsa, pelo contribuinte com seu certificado digital, através do site do Fisco; 3- emissão de NF-e pelo contribuinte com aplicativo fornecido pelo Fisco.
     */
    public procEmi?: TPl010CNt2022002V130LeiauteNFeV400ProcEmi;
    /**
     * Grupo de Compras Governamentais
     */
    public gCompraGov?: unknown;
    /**
     * Informado para abater as parcelas de antecipação de pagamento, conforme Art. 10. § 4º
     */
    public gPagAntecipado?: CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Ide instance.
     * Schema context: identificação da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Ide) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Ide";


        if (props) {

            assignSchemaProperties(this, props, ["cUF", "mod", "serie", "nNF", "dhEmi", "dhSaiEnt", "dPrevEntrega", "cMunFG", "cMunFGIBS", "tpAmb", "finNFe", "tpNFDebito", "tpNFCredito", "procEmi", "gCompraGov"]);
        	this.gPagAntecipado = (props.gPagAntecipado) ? new CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado(props.gPagAntecipado): undefined;
        }
    }
}
