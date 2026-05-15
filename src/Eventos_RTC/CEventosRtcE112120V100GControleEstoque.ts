export interface IEventosRtcE112120V100GControleEstoque {
  "@class"?: string;
  qtde?: unknown;
}

export class CEventosRtcE112120V100GControleEstoque {
    public "@class"?: string;

    public qtde?: unknown;

    public constructor(props?: CEventosRtcE112120V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE112120V100GControleEstoque";


        if (props) {

        	this.qtde = props.qtde;
        }
    }
}
