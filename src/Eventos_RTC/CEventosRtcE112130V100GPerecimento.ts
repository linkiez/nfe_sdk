import { CEventosRtcE112130V100GControleEstoque } from './CEventosRtcE112130V100GControleEstoque';

export interface IEventosRtcE112130V100GPerecimento {
  "@class"?: string;
  vIBS?: unknown;
  vCBS?: unknown;
  gControleEstoque?: CEventosRtcE112130V100GControleEstoque;
}

export class CEventosRtcE112130V100GPerecimento {
    public "@class"?: string;

    public vIBS?: unknown;
    public vCBS?: unknown;
    public gControleEstoque?: CEventosRtcE112130V100GControleEstoque;

    public constructor(props?: CEventosRtcE112130V100GPerecimento) {
        this["@class"] = ".CEventosRtcE112130V100GPerecimento";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE112130V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
