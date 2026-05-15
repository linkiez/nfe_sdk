export interface IEventosRtcE211140V100GControleEstoque {
  "@class"?: string;
  qComb?: unknown;
}

export class CEventosRtcE211140V100GControleEstoque {
    public "@class"?: string;

    public qComb?: unknown;

    public constructor(props?: CEventosRtcE211140V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE211140V100GControleEstoque";


        if (props) {

        	this.qComb = props.qComb;
        }
    }
}
