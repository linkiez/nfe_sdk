/**
 * Dados da retenção ICMS do Transporte
 */
export class CPl010CNt2022002V130LeiauteNFeV400RetTransp {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do Serviço
     */
    public vServ?: unknown;
    /**
     * BC da Retenção do ICMS
     */
    public vBCRet?: unknown;
    /**
     * Alíquota da Retenção
     */
    public pICMSRet?: unknown;
    /**
     * Valor do ICMS Retido
     */
    public vICMSRet?: unknown;
    /**
     * Código do Município de Ocorrência do Fato Gerador (utilizar a tabela do IBGE)
     */
    public cMunFG?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400RetTransp instance.
     * Schema context: Dados da retenção ICMS do Transporte
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400RetTransp) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400RetTransp";


        if (props) {

        	this.vServ = props.vServ;
        	this.vBCRet = props.vBCRet;
        	this.pICMSRet = props.pICMSRet;
        	this.vICMSRet = props.vICMSRet;
        	this.cMunFG = props.cMunFG;
        }
    }
}
