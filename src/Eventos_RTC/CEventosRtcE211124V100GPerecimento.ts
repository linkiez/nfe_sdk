import { CEventosRtcE211124V100GControleEstoque } from './CEventosRtcE211124V100GControleEstoque';

export interface IEventosRtcE211124V100GPerecimento {
  "@class"?: string;
  vIBS?: unknown;
  vCBS?: unknown;
  gControleEstoque?: CEventosRtcE211124V100GControleEstoque;
}

export class CEventosRtcE211124V100GPerecimento {
    public "@class"?: string;

    public vIBS?: unknown;
    public vCBS?: unknown;
    public gControleEstoque?: CEventosRtcE211124V100GControleEstoque;

    public constructor(props?: CEventosRtcE211124V100GPerecimento) {
        this["@class"] = ".CEventosRtcE211124V100GPerecimento";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE211124V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
