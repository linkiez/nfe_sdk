/**
 * Informações mais detalhadas do produto (usada na NFF)
 */
export class CPl010CNt2022002V130LeiauteNFeV400InfProdEmb {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Volume do produto na embalagem
     */
    public qVolEmb?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400InfProdEmb instance.
     * Schema context: Informações mais detalhadas do produto (usada na NFF)
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400InfProdEmb) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400InfProdEmb";


        if (props) {

        	this.qVolEmb = props.qVolEmb;
        }
    }
}
