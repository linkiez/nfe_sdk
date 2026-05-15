import { CEventosRtcE211130V100GControleEstoque } from './CEventosRtcE211130V100GControleEstoque';

export interface IEventosRtcE211130V100GImobilizacao {
  "@class"?: string;
  vIBS?: unknown;
  vCBS?: unknown;
  gControleEstoque?: CEventosRtcE211130V100GControleEstoque;
}

export class CEventosRtcE211130V100GImobilizacao {
    public "@class"?: string;

    public vIBS?: unknown;
    public vCBS?: unknown;
    public gControleEstoque?: CEventosRtcE211130V100GControleEstoque;

    public constructor(props?: CEventosRtcE211130V100GImobilizacao) {
        this["@class"] = ".CEventosRtcE211130V100GImobilizacao";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE211130V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
