import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100EstornoCred {
  "@class"?: string;
  vIBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100EstornoCred {
    public "@class"?: string;

    public vIBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100EstornoCred) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100EstornoCred";


        if (props) {

        	this.vIBSEstCred = props.vIBSEstCred;
        	this.vCBSEstCred = props.vCBSEstCred;
        }
    }
}
