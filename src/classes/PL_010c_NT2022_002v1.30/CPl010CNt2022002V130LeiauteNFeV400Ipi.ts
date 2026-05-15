/**
 * Informação de IPI devolvido
 */
export class CPl010CNt2022002V130LeiauteNFeV400Ipi {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IPI devolvido
     */
    public vIPIDevol?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Ipi instance.
     * Schema context: Informação de IPI devolvido
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Ipi) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Ipi";


        if (props) {

        	this.vIPIDevol = props.vIPIDevol;
        }
    }
}
