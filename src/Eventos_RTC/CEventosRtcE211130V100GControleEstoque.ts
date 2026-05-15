export interface IEventosRtcE211130V100GControleEstoque {
  "@class"?: string;
  qImobilizado?: unknown;
}

export class CEventosRtcE211130V100GControleEstoque {
    public "@class"?: string;

    public qImobilizado?: unknown;

    public constructor(props?: CEventosRtcE211130V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE211130V100GControleEstoque";


        if (props) {

        	this.qImobilizado = props.qImobilizado;
        }
    }
}
