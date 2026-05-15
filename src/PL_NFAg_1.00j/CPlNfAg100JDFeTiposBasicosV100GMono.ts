import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100GMono {
  "@class"?: string;
  vIBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vIBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vIBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100GMono {
    public "@class"?: string;

    public vIBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vIBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vIBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GMono) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GMono";


        if (props) {

        	this.vIBSMono = props.vIBSMono;
        	this.vCBSMono = props.vCBSMono;
        	this.vIBSMonoReten = props.vIBSMonoReten;
        	this.vCBSMonoReten = props.vCBSMonoReten;
        	this.vIBSMonoRet = props.vIBSMonoRet;
        	this.vCBSMonoRet = props.vCBSMonoRet;
        }
    }
}
