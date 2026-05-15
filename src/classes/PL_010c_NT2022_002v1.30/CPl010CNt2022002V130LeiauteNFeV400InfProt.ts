/**
 * Dados do protocolo de status
 */
export class CPl010CNt2022002V130LeiauteNFeV400InfProt {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que processou a NF-e
     */
    public verAplic?: unknown;
    /**
     * Chaves de acesso da NF-e, compostas por: UF do emitente, AAMM da emissão da NFe, CNPJ do emitente, modelo, série e número da NF-e e código numérico+DV.
     */
    public chNFe?: unknown;
    /**
     * Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SSTZD. Deve ser preenchida com data e hora da gravação no Banco em caso de Confirmação. Em caso de Rejeição, com data e hora do recebimento do Lote de NF-e enviado.
     */
    public dhRecbto?: unknown;
    /**
     * Número do Protocolo de Status da NF-e. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 - códiga da UF - 2 posições ano; 10 seqüencial no ano.
     */
    public nProt?: unknown;
    /**
     * Digest Value da NF-e processada. Utilizado para conferir a integridade da NF-e original.
     */
    public digVal?: unknown;
    /**
     * Código do status da mensagem enviada.
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do serviço solicitado.
     */
    public xMotivo?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400InfProt instance.
     * Schema context: Dados do protocolo de status
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400InfProt) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400InfProt";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.chNFe = props.chNFe;
        	this.dhRecbto = props.dhRecbto;
        	this.nProt = props.nProt;
        	this.digVal = props.digVal;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        }
    }
}
