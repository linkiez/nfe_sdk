import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100Red {
  "@class"?: string;
  pRedAliq?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  pAliqEfet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100Red {
    public "@class"?: string;

    public pRedAliq?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public pAliqEfet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Red) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Red";


        if (props) {

        	this.pRedAliq = props.pRedAliq;
        	this.pAliqEfet = props.pAliqEfet;
        }
    }
}
