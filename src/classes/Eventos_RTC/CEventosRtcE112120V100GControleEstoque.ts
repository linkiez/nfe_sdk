/**
 * Informar a quantidade que não atendeu os requisitos para a conversão em isenção
 */
export class CEventosRtcE112120V100GControleEstoque {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informar a quantidade que não atendeu os requisitos para a conversão em isenção
     */
    public qtde?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE112120V100GControleEstoque instance.
     * Schema context: Informar a quantidade que não atendeu os requisitos para a conversão em isenção
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112120V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE112120V100GControleEstoque";


        if (props) {

        	this.qtde = props.qtde;
        }
    }
}
