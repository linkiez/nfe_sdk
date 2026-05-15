import { CPl010CNt2022002V130DFeTiposBasicosV100GibsMun } from './CPl010CNt2022002V130DFeTiposBasicosV100GibsMun';

import { CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf } from './CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100Gibs {
  "@class"?: string;
  gIBSUF?: CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf;
  gIBSMun?: CPl010CNt2022002V130DFeTiposBasicosV100GibsMun;
  vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCredPresCondSus?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100Gibs {
    public "@class"?: string;

    public gIBSUF?: CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf;
    public gIBSMun?: CPl010CNt2022002V130DFeTiposBasicosV100GibsMun;
    public vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCredPresCondSus?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Gibs) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Gibs";


        if (props) {

        	this.gIBSUF = (props.gIBSUF) ? new CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf(props.gIBSUF): undefined;
        	this.gIBSMun = (props.gIBSMun) ? new CPl010CNt2022002V130DFeTiposBasicosV100GibsMun(props.gIBSMun): undefined;
        	this.vIBS = props.vIBS;
        	this.vCredPres = props.vCredPres;
        	this.vCredPresCondSus = props.vCredPresCondSus;
        }
    }
}
