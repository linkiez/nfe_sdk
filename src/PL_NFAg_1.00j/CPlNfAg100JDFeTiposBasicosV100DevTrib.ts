import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100DevTrib {
  "@class"?: string;
  vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100DevTrib {
    public "@class"?: string;

    public vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100DevTrib) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100DevTrib";


        if (props) {

        	this.vDevTrib = props.vDevTrib;
        }
    }
}
