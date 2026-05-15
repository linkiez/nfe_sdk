export interface IEventosRtcE112130V100GControleEstoque {
  "@class"?: string;
  qPerecimento?: unknown;
}

export class CEventosRtcE112130V100GControleEstoque {
    public "@class"?: string;

    public qPerecimento?: unknown;

    public constructor(props?: CEventosRtcE112130V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE112130V100GControleEstoque";


        if (props) {

        	this.qPerecimento = props.qPerecimento;
        }
    }
}
