import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100DevTrib {
  "@class"?: string;
  vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100DevTrib {
    public "@class"?: string;

    public vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100DevTrib) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100DevTrib";


        if (props) {

        	this.vDevTrib = props.vDevTrib;
        }
    }
}
