import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informar a quantidade para consumo de pessoa física
 */
export class CEventosRtcE211120V100GControleEstoque {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informar a quantidade para consumo de pessoa física
     */
    public qConsumo?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE211120V100GControleEstoque instance.
     * Schema context: Informar a quantidade para consumo de pessoa física
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211120V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE211120V100GControleEstoque";


        if (props) {

            assignSchemaProperties(this, props, ["qConsumo"]);
        }
    }
}
