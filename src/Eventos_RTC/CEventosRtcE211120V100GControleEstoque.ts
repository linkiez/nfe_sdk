export interface IEventosRtcE211120V100GControleEstoque {
  "@class"?: string;
  qConsumo?: unknown;
}

export class CEventosRtcE211120V100GControleEstoque {
    public "@class"?: string;

    public qConsumo?: unknown;

    public constructor(props?: CEventosRtcE211120V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE211120V100GControleEstoque";


        if (props) {

        	this.qConsumo = props.qConsumo;
        }
    }
}
