import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100GMonoRet {
  "@class"?: string;
  qBCMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
  adRemIBSRet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vIBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  adRemCBSRet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vCBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100GMonoRet {
    public "@class"?: string;

    public qBCMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
    public adRemIBSRet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vIBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public adRemCBSRet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vCBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GMonoRet) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GMonoRet";


        if (props) {

        	this.qBCMonoRet = props.qBCMonoRet;
        	this.adRemIBSRet = props.adRemIBSRet;
        	this.vIBSMonoRet = props.vIBSMonoRet;
        	this.adRemCBSRet = props.adRemCBSRet;
        	this.vCBSMonoRet = props.vCBSMonoRet;
        }
    }
}
