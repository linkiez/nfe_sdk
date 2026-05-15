import { CPl010CNt2022002V130LeiauteNFeV400RetTransp } from './CPl010CNt2022002V130LeiauteNFeV400RetTransp';

import { CPl010CNt2022002V130LeiauteNFeV400Transporta } from './CPl010CNt2022002V130LeiauteNFeV400Transporta';

import { CPl010CNt2022002V130LeiauteNFeV400Vol } from './CPl010CNt2022002V130LeiauteNFeV400Vol';

export interface IPl010CNt2022002V130LeiauteNFeV400Transp {
  "@class"?: string;
  transporta?: CPl010CNt2022002V130LeiauteNFeV400Transporta;
  retTransp?: CPl010CNt2022002V130LeiauteNFeV400RetTransp;
  vol?: CPl010CNt2022002V130LeiauteNFeV400Vol;
}

export class CPl010CNt2022002V130LeiauteNFeV400Transp {
    public "@class"?: string;

    public transporta?: CPl010CNt2022002V130LeiauteNFeV400Transporta;
    public retTransp?: CPl010CNt2022002V130LeiauteNFeV400RetTransp;
    public vol?: CPl010CNt2022002V130LeiauteNFeV400Vol;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Transp) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Transp";


        if (props) {

        	this.transporta = (props.transporta) ? new CPl010CNt2022002V130LeiauteNFeV400Transporta(props.transporta): undefined;
        	this.retTransp = (props.retTransp) ? new CPl010CNt2022002V130LeiauteNFeV400RetTransp(props.retTransp): undefined;
        	this.vol = (props.vol) ? new CPl010CNt2022002V130LeiauteNFeV400Vol(props.vol): undefined;
        }
    }
}
