/**
 * Dados da fatura
 */
export class CPl010CNt2022002V130LeiauteNFeV400Fat {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor original da fatura
     */
    public vOrig?: unknown;
    /**
     * Valor do desconto da fatura
     */
    public vDesc?: unknown;
    /**
     * Valor líquido da fatura
     */
    public vLiq?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Fat instance.
     * Schema context: Dados da fatura
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Fat) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Fat";


        if (props) {

        	this.vOrig = props.vOrig;
        	this.vDesc = props.vDesc;
        	this.vLiq = props.vLiq;
        }
    }
}
