import { TPlNfAg100JDFeTiposBasicosV100Cst } from './TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from './TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

export interface IPlNfAg100JDFeTiposBasicosV100TribRegular {
  "@class"?: string;
  CSTReg?: TPlNfAg100JDFeTiposBasicosV100Cst;
  cClassTribReg?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
  pAliqEfetRegIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vTribRegIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  pAliqEfetRegIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vTribRegIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  pAliqEfetRegCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vTribRegCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100TribRegular {
    public "@class"?: string;

    public CSTReg?: TPlNfAg100JDFeTiposBasicosV100Cst;
    public cClassTribReg?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
    public pAliqEfetRegIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vTribRegIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public pAliqEfetRegIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vTribRegIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public pAliqEfetRegCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vTribRegCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TribRegular) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TribRegular";


        if (props) {

        	this.CSTReg = props.CSTReg;
        	this.cClassTribReg = props.cClassTribReg;
        	this.pAliqEfetRegIBSUF = props.pAliqEfetRegIBSUF;
        	this.vTribRegIBSUF = props.vTribRegIBSUF;
        	this.pAliqEfetRegIBSMun = props.pAliqEfetRegIBSMun;
        	this.vTribRegIBSMun = props.vTribRegIBSMun;
        	this.pAliqEfetRegCBS = props.pAliqEfetRegCBS;
        	this.vTribRegCBS = props.vTribRegCBS;
        }
    }
}
