import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from './TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from './TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

export interface IPl010CNt2022002V130DFeTiposBasicosV100TribRegular {
  "@class"?: string;
  CSTReg?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
  cClassTribReg?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
  pAliqEfetRegIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vTribRegIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  pAliqEfetRegIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vTribRegIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  pAliqEfetRegCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vTribRegCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100TribRegular {
    public "@class"?: string;

    public CSTReg?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
    public cClassTribReg?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
    public pAliqEfetRegIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vTribRegIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public pAliqEfetRegIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vTribRegIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public pAliqEfetRegCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vTribRegCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TribRegular) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TribRegular";


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
