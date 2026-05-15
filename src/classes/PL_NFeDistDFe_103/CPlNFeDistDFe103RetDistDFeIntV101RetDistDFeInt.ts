import { CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt } from './CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt';

/**
 * Schema do resultado do pedido de distribuição de DF-e de interesse
 */
export class CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Web Service NFeDistribuicaoDFe
     */
    public verAplic?: unknown;
    /**
     * Código do status de processamento da requisição
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do processamento da requisição
     */
    public xMotivo?: unknown;
    /**
     * Data e Hora de processamento da requisição no formato AAAA-MM-DDTHH:MM:SSTZD
     */
    public dhResp?: unknown;
    /**
     * Último NSU pesquisado no Ambiente Nacional. Se for o caso, o solicitante pode continuar a consulta a partir deste NSU para obter novos resultados.
     */
    public ultNSU?: unknown;
    /**
     * Maior NSU existente no Ambiente Nacional para o CNPJ/CPF informado
     */
    public maxNSU?: unknown;
    /**
     * Conjunto de informações resumidas e documentos fiscais eletrônicos de interesse da pessoa ou empresa.
     */
    public loteDistDFeInt?: CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt;

    /**
     * Creates a new schema-backed CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt instance.
     * Schema context: Schema do resultado do pedido de distribuição de DF-e de interesse
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt) {
        this["@class"] = ".CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.dhResp = props.dhResp;
        	this.ultNSU = props.ultNSU;
        	this.maxNSU = props.maxNSU;
        	this.loteDistDFeInt = (props.loteDistDFeInt) ? new CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt(props.loteDistDFeInt): undefined;
        }
    }
}
