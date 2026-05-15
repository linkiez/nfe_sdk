import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov {
  "@class"?: string;
  pAliqIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vTribIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  pAliqIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vTribIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  pAliqCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vTribCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov {
    public "@class"?: string;

    public pAliqIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vTribIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public pAliqIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vTribIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public pAliqCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vTribCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov";


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
