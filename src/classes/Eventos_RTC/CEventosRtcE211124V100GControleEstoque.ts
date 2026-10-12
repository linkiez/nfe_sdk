import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informar a quantidade que foi objeto de roubo, perda, furto ou perecimento
 */
export class CEventosRtcE211124V100GControleEstoque {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informar a quantidade que foi objeto de roubo, perda, furto ou perecimento
     */
    public qPerecimento?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE211124V100GControleEstoque instance.
     * Schema context: Informar a quantidade que foi objeto de roubo, perda, furto ou perecimento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211124V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE211124V100GControleEstoque";


        if (props) {

            assignSchemaProperties(this, props, ["qPerecimento"]);
        }
    }
}
