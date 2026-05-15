import { CPlNfGas100EDFeTiposBasicosV100GibsMun } from './CPlNfGas100EDFeTiposBasicosV100GibsMun';

import { CPlNfGas100EDFeTiposBasicosV100Gibsuf } from './CPlNfGas100EDFeTiposBasicosV100Gibsuf';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100Gibs {
  "@class"?: string;
  gIBSUF?: CPlNfGas100EDFeTiposBasicosV100Gibsuf;
  gIBSMun?: CPlNfGas100EDFeTiposBasicosV100GibsMun;
  vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCredPresCondSus?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100Gibs {
    public "@class"?: string;

    public gIBSUF?: CPlNfGas100EDFeTiposBasicosV100Gibsuf;
    public gIBSMun?: CPlNfGas100EDFeTiposBasicosV100GibsMun;
    public vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCredPresCondSus?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Gibs) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Gibs";


        if (props) {

        	this.gIBSUF = (props.gIBSUF) ? new CPlNfGas100EDFeTiposBasicosV100Gibsuf(props.gIBSUF): undefined;
        	this.gIBSMun = (props.gIBSMun) ? new CPlNfGas100EDFeTiposBasicosV100GibsMun(props.gIBSMun): undefined;
        	this.vIBS = props.vIBS;
        	this.vCredPres = props.vCredPres;
        	this.vCredPresCondSus = props.vCredPresCondSus;
        }
    }
}
