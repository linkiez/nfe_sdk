import { CEventosRtcE112120V100GControleEstoque } from './CEventosRtcE112120V100GControleEstoque';

export interface IEventosRtcE112120V100GConsumo {
  "@class"?: string;
  vIBS?: unknown;
  vCBS?: unknown;
  gControleEstoque?: CEventosRtcE112120V100GControleEstoque;
}

export class CEventosRtcE112120V100GConsumo {
    public "@class"?: string;

    public vIBS?: unknown;
    public vCBS?: unknown;
    public gControleEstoque?: CEventosRtcE112120V100GControleEstoque;

    public constructor(props?: CEventosRtcE112120V100GConsumo) {
        this["@class"] = ".CEventosRtcE112120V100GConsumo";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE112120V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
