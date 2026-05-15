import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100Gibsuf {
  "@class"?: string;
  vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100Gibsuf {
    public "@class"?: string;

    public vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Gibsuf) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Gibsuf";


        if (props) {

        	this.vDif = props.vDif;
        	this.vDevTrib = props.vDevTrib;
        	this.vIBSUF = props.vIBSUF;
        }
    }
}
