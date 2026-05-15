/**
 * Grupo de informações sobre o CréditoPresumido
 */
export class CPl010CNt2022002V130LeiauteNFeV400GCred {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual do Crédito Presumido
     */
    public pCredPresumido?: unknown;
    /**
     * Valor do Crédito Presumido
     */
    public vCredPresumido?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400GCred instance.
     * Schema context: Grupo de informações sobre o CréditoPresumido
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400GCred) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400GCred";


        if (props) {

        	this.pCredPresumido = props.pCredPresumido;
        	this.vCredPresumido = props.vCredPresumido;
        }
    }
}
