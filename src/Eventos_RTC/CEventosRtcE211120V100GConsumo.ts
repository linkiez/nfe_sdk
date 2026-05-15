import { CEventosRtcE211120V100DFeReferenciado } from './CEventosRtcE211120V100DFeReferenciado';

import { CEventosRtcE211120V100GControleEstoque } from './CEventosRtcE211120V100GControleEstoque';

export interface IEventosRtcE211120V100GConsumo {
  "@class"?: string;
  vIBS?: unknown;
  vCBS?: unknown;
  gControleEstoque?: CEventosRtcE211120V100GControleEstoque;
  CEventosRtcE211120V100DFeReferenciado?: CEventosRtcE211120V100DFeReferenciado;
}

export class CEventosRtcE211120V100GConsumo {
    public "@class"?: string;

    public vIBS?: unknown;
    public vCBS?: unknown;
    public gControleEstoque?: CEventosRtcE211120V100GControleEstoque;
    public CEventosRtcE211120V100DFeReferenciado?: CEventosRtcE211120V100DFeReferenciado;

    public constructor(props?: CEventosRtcE211120V100GConsumo) {
        this["@class"] = ".CEventosRtcE211120V100GConsumo";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE211120V100GControleEstoque(props.gControleEstoque): undefined;
        	this.CEventosRtcE211120V100DFeReferenciado = (props.CEventosRtcE211120V100DFeReferenciado) ? new CEventosRtcE211120V100DFeReferenciado(props.CEventosRtcE211120V100DFeReferenciado): undefined;
        }
    }
}
