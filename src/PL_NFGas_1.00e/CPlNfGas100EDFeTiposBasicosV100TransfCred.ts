import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100TransfCred {
  "@class"?: string;
  vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100TransfCred {
    public "@class"?: string;

    public vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TransfCred) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TransfCred";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        }
    }
}
