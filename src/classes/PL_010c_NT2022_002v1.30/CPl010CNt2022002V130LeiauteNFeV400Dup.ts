/**
 * Dados das duplicatas NT 2011/004
 */
export class CPl010CNt2022002V130LeiauteNFeV400Dup {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Data de vencimento da duplicata (AAAA-MM-DD)
     */
    public dVenc?: unknown;
    /**
     * Valor da duplicata
     */
    public vDup?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Dup instance.
     * Schema context: Dados das duplicatas NT 2011/004
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Dup) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Dup";


        if (props) {

        	this.dVenc = props.dVenc;
        	this.vDup = props.vDup;
        }
    }
}
