import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100GEstornoCred {
  "@class"?: string;
  vIBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100GEstornoCred {
    public "@class"?: string;

    public vIBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GEstornoCred) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GEstornoCred";


        if (props) {

        	this.vIBSEstCred = props.vIBSEstCred;
        	this.vCBSEstCred = props.vCBSEstCred;
        }
    }
}
