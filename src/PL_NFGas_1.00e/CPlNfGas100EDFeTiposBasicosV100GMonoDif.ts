import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100GMonoDif {
  "@class"?: string;
  pDifIBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vIBSMonoDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  pDifCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vCBSMonoDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100GMonoDif {
    public "@class"?: string;

    public pDifIBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vIBSMonoDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public pDifCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vCBSMonoDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GMonoDif) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GMonoDif";


        if (props) {

        	this.pDifIBS = props.pDifIBS;
        	this.vIBSMonoDif = props.vIBSMonoDif;
        	this.pDifCBS = props.pDifCBS;
        	this.vCBSMonoDif = props.vCBSMonoDif;
        }
    }
}
