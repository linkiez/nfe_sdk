import { CPlNfGas100EDFeTiposBasicosV100DevTrib } from './CPlNfGas100EDFeTiposBasicosV100DevTrib';

import { CPlNfGas100EDFeTiposBasicosV100Dif } from './CPlNfGas100EDFeTiposBasicosV100Dif';

import { CPlNfGas100EDFeTiposBasicosV100Red } from './CPlNfGas100EDFeTiposBasicosV100Red';

import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100Gcbs {
  "@class"?: string;
  vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCredPresCondSus?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  pCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  gDif?: CPlNfGas100EDFeTiposBasicosV100Dif;
  gDevTrib?: CPlNfGas100EDFeTiposBasicosV100DevTrib;
  gRed?: CPlNfGas100EDFeTiposBasicosV100Red;
}

export class CPlNfGas100EDFeTiposBasicosV100Gcbs {
    public "@class"?: string;

    public vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCredPresCondSus?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public pCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public gDif?: CPlNfGas100EDFeTiposBasicosV100Dif;
    public gDevTrib?: CPlNfGas100EDFeTiposBasicosV100DevTrib;
    public gRed?: CPlNfGas100EDFeTiposBasicosV100Red;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Gcbs) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Gcbs";


        if (props) {

        	this.vDif = props.vDif;
        	this.vDevTrib = props.vDevTrib;
        	this.vCBS = props.vCBS;
        	this.vCredPres = props.vCredPres;
        	this.vCredPresCondSus = props.vCredPresCondSus;
        	this.pCBS = props.pCBS;
        	this.gDif = (props.gDif) ? new CPlNfGas100EDFeTiposBasicosV100Dif(props.gDif): undefined;
        	this.gDevTrib = (props.gDevTrib) ? new CPlNfGas100EDFeTiposBasicosV100DevTrib(props.gDevTrib): undefined;
        	this.gRed = (props.gRed) ? new CPlNfGas100EDFeTiposBasicosV100Red(props.gRed): undefined;
        }
    }
}
