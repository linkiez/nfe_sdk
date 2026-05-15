/**
 * Informar a quantidade do item a ser imobilizado
 */
export class CEventosRtcE211130V100GControleEstoque {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informar a quantidade do item a ser imobilizado
     */
    public qImobilizado?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE211130V100GControleEstoque instance.
     * Schema context: Informar a quantidade do item a ser imobilizado
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211130V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE211130V100GControleEstoque";


        if (props) {

        	this.qImobilizado = props.qImobilizado;
        }
    }
}
