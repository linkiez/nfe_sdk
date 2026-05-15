import { CEventosRtcE211140V100GControleEstoque } from './CEventosRtcE211140V100GControleEstoque';

/**
 * Informações de consumo de combustíveis
 */
export class CEventosRtcE211140V100GConsumoComb {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS relativo ao consumo de combustível na nota de aquisição
     */
    public vIBS?: unknown;
    /**
     * Valor da CBS relativo ao consumo de combustível na nota de aquisição
     */
    public vCBS?: unknown;
    /**
     * Informar a quantidade de consumo do item
     */
    public gControleEstoque?: CEventosRtcE211140V100GControleEstoque;

    /**
     * Creates a new schema-backed CEventosRtcE211140V100GConsumoComb instance.
     * Schema context: Informações de consumo de combustíveis
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211140V100GConsumoComb) {
        this["@class"] = ".CEventosRtcE211140V100GConsumoComb";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE211140V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
