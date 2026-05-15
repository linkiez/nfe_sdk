import { TPlNfGas100EDFeTiposBasicosV100Cst } from './TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from './TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

export interface IPlNfGas100EDFeTiposBasicosV100TribRegular {
  "@class"?: string;
  CSTReg?: TPlNfGas100EDFeTiposBasicosV100Cst;
  cClassTribReg?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
  pAliqEfetRegIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vTribRegIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  pAliqEfetRegIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vTribRegIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  pAliqEfetRegCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vTribRegCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100TribRegular {
    public "@class"?: string;

    public CSTReg?: TPlNfGas100EDFeTiposBasicosV100Cst;
    public cClassTribReg?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
    public pAliqEfetRegIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vTribRegIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public pAliqEfetRegIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vTribRegIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public pAliqEfetRegCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vTribRegCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TribRegular) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TribRegular";


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
