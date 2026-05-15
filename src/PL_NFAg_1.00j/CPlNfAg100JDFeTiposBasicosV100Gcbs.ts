import { CPlNfAg100JDFeTiposBasicosV100DevTrib } from './CPlNfAg100JDFeTiposBasicosV100DevTrib';

import { CPlNfAg100JDFeTiposBasicosV100Dif } from './CPlNfAg100JDFeTiposBasicosV100Dif';

import { CPlNfAg100JDFeTiposBasicosV100Red } from './CPlNfAg100JDFeTiposBasicosV100Red';

import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100Gcbs {
  "@class"?: string;
  vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCredPresCondSus?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  pCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  gDif?: CPlNfAg100JDFeTiposBasicosV100Dif;
  gDevTrib?: CPlNfAg100JDFeTiposBasicosV100DevTrib;
  gRed?: CPlNfAg100JDFeTiposBasicosV100Red;
}

export class CPlNfAg100JDFeTiposBasicosV100Gcbs {
    public "@class"?: string;

    public vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCredPresCondSus?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public pCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public gDif?: CPlNfAg100JDFeTiposBasicosV100Dif;
    public gDevTrib?: CPlNfAg100JDFeTiposBasicosV100DevTrib;
    public gRed?: CPlNfAg100JDFeTiposBasicosV100Red;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Gcbs) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Gcbs";


        if (props) {

        	this.vDif = props.vDif;
        	this.vDevTrib = props.vDevTrib;
        	this.vCBS = props.vCBS;
        	this.vCredPres = props.vCredPres;
        	this.vCredPresCondSus = props.vCredPresCondSus;
        	this.pCBS = props.pCBS;
        	this.gDif = (props.gDif) ? new CPlNfAg100JDFeTiposBasicosV100Dif(props.gDif): undefined;
        	this.gDevTrib = (props.gDevTrib) ? new CPlNfAg100JDFeTiposBasicosV100DevTrib(props.gDevTrib): undefined;
        	this.gRed = (props.gRed) ? new CPlNfAg100JDFeTiposBasicosV100Red(props.gRed): undefined;
        }
    }
}
