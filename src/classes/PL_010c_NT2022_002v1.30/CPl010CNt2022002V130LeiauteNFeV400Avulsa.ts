/**
 * Emissão de avulsa, informar os dados do Fisco emitente
 */
export class CPl010CNt2022002V130LeiauteNFeV400Avulsa {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * CNPJ do Órgão emissor
     */
    public CNPJ?: unknown;
    /**
     * Sigla da Unidade da Federação
     */
    public UF?: unknown;
    /**
     * Data de emissão do DAR (AAAA-MM-DD)
     */
    public dEmi?: unknown;
    /**
     * Valor Total constante no DAR
     */
    public vDAR?: unknown;
    /**
     * Data de pagamento do DAR (AAAA-MM-DD)
     */
    public dPag?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Avulsa instance.
     * Schema context: Emissão de avulsa, informar os dados do Fisco emitente
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Avulsa) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Avulsa";


        if (props) {

        	this.CNPJ = props.CNPJ;
        	this.UF = props.UF;
        	this.dEmi = props.dEmi;
        	this.vDAR = props.vDAR;
        	this.dPag = props.dPag;
        }
    }
}
