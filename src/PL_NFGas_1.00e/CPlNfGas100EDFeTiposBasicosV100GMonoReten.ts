import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100GMonoReten {
  "@class"?: string;
  qBCMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
  adRemIBSReten?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vIBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  adRemCBSReten?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vCBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100GMonoReten {
    public "@class"?: string;

    public qBCMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
    public adRemIBSReten?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vIBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public adRemCBSReten?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vCBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GMonoReten) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GMonoReten";


        if (props) {

        	this.qBCMonoReten = props.qBCMonoReten;
        	this.adRemIBSReten = props.adRemIBSReten;
        	this.vIBSMonoReten = props.vIBSMonoReten;
        	this.adRemCBSReten = props.adRemCBSReten;
        	this.vCBSMonoReten = props.vCBSMonoReten;
        }
    }
}
