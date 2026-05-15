import { CEventosRtcE211140V100GControleEstoque } from './CEventosRtcE211140V100GControleEstoque';

export interface IEventosRtcE211140V100GConsumoComb {
  "@class"?: string;
  vIBS?: unknown;
  vCBS?: unknown;
  gControleEstoque?: CEventosRtcE211140V100GControleEstoque;
}

export class CEventosRtcE211140V100GConsumoComb {
    public "@class"?: string;

    public vIBS?: unknown;
    public vCBS?: unknown;
    public gControleEstoque?: CEventosRtcE211140V100GControleEstoque;

    public constructor(props?: CEventosRtcE211140V100GConsumoComb) {
        this["@class"] = ".CEventosRtcE211140V100GConsumoComb";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE211140V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
