import { CPl010CNt2022002V130DFeTiposBasicosV100DevTrib } from './CPl010CNt2022002V130DFeTiposBasicosV100DevTrib';

import { CPl010CNt2022002V130DFeTiposBasicosV100Dif } from './CPl010CNt2022002V130DFeTiposBasicosV100Dif';

import { CPl010CNt2022002V130DFeTiposBasicosV100Red } from './CPl010CNt2022002V130DFeTiposBasicosV100Red';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100Gcbs {
  "@class"?: string;
  vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCredPresCondSus?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  pCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  gDif?: CPl010CNt2022002V130DFeTiposBasicosV100Dif;
  gDevTrib?: CPl010CNt2022002V130DFeTiposBasicosV100DevTrib;
  gRed?: CPl010CNt2022002V130DFeTiposBasicosV100Red;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100Gcbs {
    public "@class"?: string;

    public vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCredPresCondSus?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public pCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public gDif?: CPl010CNt2022002V130DFeTiposBasicosV100Dif;
    public gDevTrib?: CPl010CNt2022002V130DFeTiposBasicosV100DevTrib;
    public gRed?: CPl010CNt2022002V130DFeTiposBasicosV100Red;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Gcbs) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Gcbs";


        if (props) {

        	this.vDif = props.vDif;
        	this.vDevTrib = props.vDevTrib;
        	this.vCBS = props.vCBS;
        	this.vCredPres = props.vCredPres;
        	this.vCredPresCondSus = props.vCredPresCondSus;
        	this.pCBS = props.pCBS;
        	this.gDif = (props.gDif) ? new CPl010CNt2022002V130DFeTiposBasicosV100Dif(props.gDif): undefined;
        	this.gDevTrib = (props.gDevTrib) ? new CPl010CNt2022002V130DFeTiposBasicosV100DevTrib(props.gDevTrib): undefined;
        	this.gRed = (props.gRed) ? new CPl010CNt2022002V130DFeTiposBasicosV100Red(props.gRed): undefined;
        }
    }
}
