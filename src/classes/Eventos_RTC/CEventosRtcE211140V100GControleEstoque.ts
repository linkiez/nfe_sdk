import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informar a quantidade de consumo do item
 */
export class CEventosRtcE211140V100GControleEstoque {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informar a quantidade de consumo do item
     */
    public qComb?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE211140V100GControleEstoque instance.
     * Schema context: Informar a quantidade de consumo do item
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211140V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE211140V100GControleEstoque";


        if (props) {

            assignSchemaProperties(this, props, ["qComb"]);
        }
    }
}
