import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100TribCompraGov {
  "@class"?: string;
  pAliqIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vTribIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  pAliqIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vTribIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  pAliqCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vTribCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100TribCompraGov {
    public "@class"?: string;

    public pAliqIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vTribIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public pAliqIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vTribIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public pAliqCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vTribCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TribCompraGov) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TribCompraGov";


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
