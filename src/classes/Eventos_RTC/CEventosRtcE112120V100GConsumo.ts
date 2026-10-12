import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE112120V100GControleEstoque } from './CEventosRtcE112120V100GControleEstoque';

/**
 * Informações de itens integrados ao ativo imobilizado
 */
export class CEventosRtcE112120V100GConsumo {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do IBS correspondente à quantidade que não atendeu aos requisitos para a conversão em isenção
     */
    public vIBS?: unknown;
    /**
     * Valor do CBS correspondente à quantidade que não atendeu aos requisitos para a conversão em isenção
     */
    public vCBS?: unknown;
    /**
     * Informar a quantidade que não atendeu os requisitos para a conversão em isenção
     */
    public gControleEstoque?: CEventosRtcE112120V100GControleEstoque;

    /**
     * Creates a new schema-backed CEventosRtcE112120V100GConsumo instance.
     * Schema context: Informações de itens integrados ao ativo imobilizado
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112120V100GConsumo) {
        this["@class"] = ".CEventosRtcE112120V100GConsumo";


        if (props) {

            assignSchemaProperties(this, props, ["vIBS", "vCBS"]);
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE112120V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
