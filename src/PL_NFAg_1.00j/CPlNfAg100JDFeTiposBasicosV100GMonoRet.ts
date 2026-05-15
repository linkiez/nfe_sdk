import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100GMonoRet {
  "@class"?: string;
  qBCMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
  adRemIBSRet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vIBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  adRemCBSRet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vCBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100GMonoRet {
    public "@class"?: string;

    public qBCMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
    public adRemIBSRet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vIBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public adRemCBSRet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vCBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GMonoRet) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GMonoRet";


        if (props) {

        	this.qBCMonoRet = props.qBCMonoRet;
        	this.adRemIBSRet = props.adRemIBSRet;
        	this.vIBSMonoRet = props.vIBSMonoRet;
        	this.adRemCBSRet = props.adRemCBSRet;
        	this.vCBSMonoRet = props.vCBSMonoRet;
        }
    }
}
