/**
 * Dados do PIS Substituição Tributária
 */
export class CPl010CNt2022002V130LeiauteNFeV400Pisst {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do PIS ST
     */
    public vPIS?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Pisst instance.
     * Schema context: Dados do PIS Substituição Tributária
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Pisst) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Pisst";


        if (props) {

        	this.vPIS = props.vPIS;
        }
    }
}
