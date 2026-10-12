import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE211124V100GControleEstoque } from './CEventosRtcE211124V100GControleEstoque';

/**
 * Informações por item da Nota de Aquisição
 */
export class CEventosRtcE211124V100GPerecimento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS na nota de aquisição correspondente à quantidade destinada a uso e consumo pessoal
     */
    public vIBS?: unknown;
    /**
     * Valor da CBS na nota de aquisição correspondente à quantidade destinada a uso e consumo pessoal
     */
    public vCBS?: unknown;
    /**
     * Informar a quantidade que foi objeto de roubo, perda, furto ou perecimento
     */
    public gControleEstoque?: CEventosRtcE211124V100GControleEstoque;

    /**
     * Creates a new schema-backed CEventosRtcE211124V100GPerecimento instance.
     * Schema context: Informações por item da Nota de Aquisição
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211124V100GPerecimento) {
        this["@class"] = ".CEventosRtcE211124V100GPerecimento";


        if (props) {

            assignSchemaProperties(this, props, ["vIBS", "vCBS"]);
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE211124V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
