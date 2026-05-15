/**
 * Schema da estrutura XML gerada pelo Ambiente Nacional com o conjunto de informações resumidas de um evento de NF-e
 */
export class CPlNFeDistDFe103ResEventoV101ResEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
     */
    public cOrgao?: unknown;
    /**
     * Chave de acesso da NF-e
     */
    public chNFe?: unknown;
    /**
     * Data e Hora do Evento, formato UTC (AAAA-MM-DDThh:mm:ssTZD, onde TZD = +hh:mm ou -hh:mm)
     */
    public dhEvento?: unknown;
    /**
     * Data e hora de autorização do evento no formato AAAA-MM-DDTHH:MM:SSTZD
     */
    public dhRecbto?: unknown;
    /**
     * Número do Protocolo do evento. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 - códiga da UF - 2 posições ano; 10 seqüencial no ano
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
     * Creates a new schema-backed CPlNFeDistDFe103ResEventoV101ResEvento instance.
     * Schema context: Schema da estrutura XML gerada pelo Ambiente Nacional com o conjunto de informações resumidas de um evento de NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNFeDistDFe103ResEventoV101ResEvento) {
        this["@class"] = ".CPlNFeDistDFe103ResEventoV101ResEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.dhRecbto = props.dhRecbto;
        	this.nProt = props.nProt;
        }
    }
}
