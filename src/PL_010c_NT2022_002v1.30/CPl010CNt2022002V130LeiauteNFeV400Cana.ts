import { CPl010CNt2022002V130LeiauteNFeV400Deduc } from './CPl010CNt2022002V130LeiauteNFeV400Deduc';

import { CPl010CNt2022002V130LeiauteNFeV400ForDia } from './CPl010CNt2022002V130LeiauteNFeV400ForDia';

export interface IPl010CNt2022002V130LeiauteNFeV400Cana {
  "@class"?: string;
  forDia?: CPl010CNt2022002V130LeiauteNFeV400ForDia;
  qTotMes?: unknown;
  qTotAnt?: unknown;
  qTotGer?: unknown;
  deduc?: CPl010CNt2022002V130LeiauteNFeV400Deduc;
  vFor?: unknown;
  vTotDed?: unknown;
  vLiqFor?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Cana {
    public "@class"?: string;

    public forDia?: CPl010CNt2022002V130LeiauteNFeV400ForDia;
    public qTotMes?: unknown;
    public qTotAnt?: unknown;
    public qTotGer?: unknown;
    public deduc?: CPl010CNt2022002V130LeiauteNFeV400Deduc;
    public vFor?: unknown;
    public vTotDed?: unknown;
    public vLiqFor?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Cana) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Cana";


        if (props) {

        	this.forDia = (props.forDia) ? new CPl010CNt2022002V130LeiauteNFeV400ForDia(props.forDia): undefined;
        	this.qTotMes = props.qTotMes;
        	this.qTotAnt = props.qTotAnt;
        	this.qTotGer = props.qTotGer;
        	this.deduc = (props.deduc) ? new CPl010CNt2022002V130LeiauteNFeV400Deduc(props.deduc): undefined;
        	this.vFor = props.vFor;
        	this.vTotDed = props.vTotDed;
        	this.vLiqFor = props.vLiqFor;
        }
    }
}
