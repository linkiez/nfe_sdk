import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100GMonoPadrao {
  "@class"?: string;
  qBCMono?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
  adRemIBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  adRemCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vIBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100GMonoPadrao {
    public "@class"?: string;

    public qBCMono?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
    public adRemIBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public adRemCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vIBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GMonoPadrao) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GMonoPadrao";


        if (props) {

        	this.qBCMono = props.qBCMono;
        	this.adRemIBS = props.adRemIBS;
        	this.adRemCBS = props.adRemCBS;
        	this.vIBSMono = props.vIBSMono;
        	this.vCBSMono = props.vCBSMono;
        }
    }
}
