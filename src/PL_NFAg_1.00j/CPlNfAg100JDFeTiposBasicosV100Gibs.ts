import { CPlNfAg100JDFeTiposBasicosV100GibsMun } from './CPlNfAg100JDFeTiposBasicosV100GibsMun';

import { CPlNfAg100JDFeTiposBasicosV100Gibsuf } from './CPlNfAg100JDFeTiposBasicosV100Gibsuf';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100Gibs {
  "@class"?: string;
  gIBSUF?: CPlNfAg100JDFeTiposBasicosV100Gibsuf;
  gIBSMun?: CPlNfAg100JDFeTiposBasicosV100GibsMun;
  vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCredPresCondSus?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100Gibs {
    public "@class"?: string;

    public gIBSUF?: CPlNfAg100JDFeTiposBasicosV100Gibsuf;
    public gIBSMun?: CPlNfAg100JDFeTiposBasicosV100GibsMun;
    public vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCredPresCondSus?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Gibs) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Gibs";


        if (props) {

        	this.gIBSUF = (props.gIBSUF) ? new CPlNfAg100JDFeTiposBasicosV100Gibsuf(props.gIBSUF): undefined;
        	this.gIBSMun = (props.gIBSMun) ? new CPlNfAg100JDFeTiposBasicosV100GibsMun(props.gIBSMun): undefined;
        	this.vIBS = props.vIBS;
        	this.vCredPres = props.vCredPres;
        	this.vCredPresCondSus = props.vCredPresCondSus;
        }
    }
}
