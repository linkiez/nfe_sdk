import { CEventosRtcE112140V100GControleEstoque } from './CEventosRtcE112140V100GControleEstoque';

export interface IEventosRtcE112140V100GItemNaoFornecido {
  "@class"?: string;
  vIBS?: unknown;
  vCBS?: unknown;
  gControleEstoque?: CEventosRtcE112140V100GControleEstoque;
}

export class CEventosRtcE112140V100GItemNaoFornecido {
    public "@class"?: string;

    public vIBS?: unknown;
    public vCBS?: unknown;
    public gControleEstoque?: CEventosRtcE112140V100GControleEstoque;

    public constructor(props?: CEventosRtcE112140V100GItemNaoFornecido) {
        this["@class"] = ".CEventosRtcE112140V100GItemNaoFornecido";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE112140V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
