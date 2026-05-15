import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100GMonoPadrao {
  "@class"?: string;
  qBCMono?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
  adRemIBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  adRemCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vIBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100GMonoPadrao {
    public "@class"?: string;

    public qBCMono?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
    public adRemIBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public adRemCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vIBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GMonoPadrao) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GMonoPadrao";


        if (props) {

        	this.qBCMono = props.qBCMono;
        	this.adRemIBS = props.adRemIBS;
        	this.adRemCBS = props.adRemCBS;
        	this.vIBSMono = props.vIBSMono;
        	this.vCBSMono = props.vCBSMono;
        }
    }
}
