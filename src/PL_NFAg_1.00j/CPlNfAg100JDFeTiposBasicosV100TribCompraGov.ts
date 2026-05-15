import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100TribCompraGov {
  "@class"?: string;
  pAliqIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vTribIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  pAliqIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vTribIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  pAliqCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vTribCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100TribCompraGov {
    public "@class"?: string;

    public pAliqIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vTribIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public pAliqIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vTribIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public pAliqCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vTribCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TribCompraGov) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TribCompraGov";


        if (props) {

        	this.pAliqIBSUF = props.pAliqIBSUF;
        	this.vTribIBSUF = props.vTribIBSUF;
        	this.pAliqIBSMun = props.pAliqIBSMun;
        	this.vTribIBSMun = props.vTribIBSMun;
        	this.pAliqCBS = props.pAliqCBS;
        	this.vTribCBS = props.vTribCBS;
        }
    }
}
