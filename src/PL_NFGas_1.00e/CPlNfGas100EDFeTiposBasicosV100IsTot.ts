import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100IsTot {
  "@class"?: string;
  vIS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100IsTot {
    public "@class"?: string;

    public vIS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100IsTot) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100IsTot";


        if (props) {

        	this.vIS = props.vIS;
        }
    }
}
