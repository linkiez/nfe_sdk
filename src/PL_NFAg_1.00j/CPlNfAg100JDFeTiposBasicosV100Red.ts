import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100Red {
  "@class"?: string;
  pRedAliq?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  pAliqEfet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100Red {
    public "@class"?: string;

    public pRedAliq?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public pAliqEfet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Red) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Red";


        if (props) {

        	this.pRedAliq = props.pRedAliq;
        	this.pAliqEfet = props.pAliqEfet;
        }
    }
}
