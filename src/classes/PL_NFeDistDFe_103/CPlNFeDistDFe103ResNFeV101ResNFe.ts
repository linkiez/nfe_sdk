import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Schema da estrutura XML gerada pelo Ambiente Nacional com o conjunto de informações resumidas de uma NF-e
 */
export class CPlNFeDistDFe103ResNFeV101ResNFe {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Chave de acesso da NF-e
     */
    public chNFe?: unknown;
    /**
     * Inscrição Estadual do Emitente
     */
    public IE?: unknown;
    /**
     * Data e Hora de emissão do Documento Fiscal (AAAA-MM-DDThh:mm:ssTZD) ex.: 2012-09-01T13:00:00-03:00
     */
    public dhEmi?: unknown;
    /**
     * Valor Total da NF-e
     */
    public vNF?: unknown;
    /**
     * Digest Value da NF-e processada. Utilizado para conferir a integridade da NF-e original
     */
    public digVal?: unknown;
    /**
     * Data e hora de autorização da NF-e, no formato AAAA-MM-DDTHH:MM:SSTZD
     */
    public dhRecbto?: unknown;
    /**
     * Número do Protocolo de Status da NF-e. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 - códiga da UF - 2 posições ano; 10 seqüencial no ano
     */
    public nProt?: unknown;

    //choice

    /**
     * CNPJ do Emitente
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * CPF do Emitente
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CPlNFeDistDFe103ResNFeV101ResNFe instance.
     * Schema context: Schema da estrutura XML gerada pelo Ambiente Nacional com o conjunto de informações resumidas de uma NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNFeDistDFe103ResNFeV101ResNFe) {
        this["@class"] = ".CPlNFeDistDFe103ResNFeV101ResNFe";


        if (props) {

            assignSchemaProperties(this, props, ["chNFe", "IE", "dhEmi", "vNF", "digVal", "dhRecbto", "nProt"]);
        }
    }
}
