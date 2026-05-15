export interface IEventosRtcE211124V100GControleEstoque {
  "@class"?: string;
  qPerecimento?: unknown;
}

export class CEventosRtcE211124V100GControleEstoque {
    public "@class"?: string;

    public qPerecimento?: unknown;

    public constructor(props?: CEventosRtcE211124V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE211124V100GControleEstoque";


        if (props) {

        	this.qPerecimento = props.qPerecimento;
        }
    }
}
