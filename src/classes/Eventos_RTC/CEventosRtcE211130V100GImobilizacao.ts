import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE211130V100GControleEstoque } from './CEventosRtcE211130V100GControleEstoque';

/**
 * Informações de itens integrados ao ativo imobilizado
 */
export class CEventosRtcE211130V100GImobilizacao {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS relativo à imobilização
     */
    public vIBS?: unknown;
    /**
     * Valor da CBS relativo à imobilização
     */
    public vCBS?: unknown;
    /**
     * Informar a quantidade do item a ser imobilizado
     */
    public gControleEstoque?: CEventosRtcE211130V100GControleEstoque;

    /**
     * Creates a new schema-backed CEventosRtcE211130V100GImobilizacao instance.
     * Schema context: Informações de itens integrados ao ativo imobilizado
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211130V100GImobilizacao) {
        this["@class"] = ".CEventosRtcE211130V100GImobilizacao";


        if (props) {

            assignSchemaProperties(this, props, ["vIBS", "vCBS"]);
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE211130V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
