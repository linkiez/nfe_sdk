import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100GMono {
  "@class"?: string;
  vIBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vIBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vIBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100GMono {
    public "@class"?: string;

    public vIBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vIBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vIBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GMono) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GMono";


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
