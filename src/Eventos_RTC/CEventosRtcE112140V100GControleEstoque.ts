export interface IEventosRtcE112140V100GControleEstoque {
  "@class"?: string;
  qNaoFornecida?: unknown;
}

export class CEventosRtcE112140V100GControleEstoque {
    public "@class"?: string;

    public qNaoFornecida?: unknown;

    public constructor(props?: CEventosRtcE112140V100GControleEstoque) {
        this["@class"] = ".CEventosRtcE112140V100GControleEstoque";


        if (props) {

        	this.qNaoFornecida = props.qNaoFornecida;
        }
    }
}
