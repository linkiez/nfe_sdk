import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100GibsMun {
  "@class"?: string;
  vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100GibsMun {
    public "@class"?: string;

    public vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GibsMun) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GibsMun";


        if (props) {

        	this.vDif = props.vDif;
        	this.vDevTrib = props.vDevTrib;
        	this.vIBSMun = props.vIBSMun;
        }
    }
}
