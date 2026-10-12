import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informar a quantidade que não foi fornecida e teve o imposto antecipado
 */
export class CEventosRtcE112140V100GControleEstoque {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informar a quantidade que não foi fornecida e teve o imposto antecipado
     */
    public qNaoFornecida?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE112140V100GControleEstoque instance.
     * Schema context: Informar a quantidade que não foi fornecida e teve o imposto antecipado
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112140V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE112140V100GControleEstoque";


        if (props) {

            assignSchemaProperties(this, props, ["qNaoFornecida"]);
        }
    }
}
