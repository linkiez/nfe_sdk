import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100GibsMun {
  "@class"?: string;
  vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100GibsMun {
    public "@class"?: string;

    public vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GibsMun) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GibsMun";


        if (props) {

        	this.vDif = props.vDif;
        	this.vDevTrib = props.vDevTrib;
        	this.vIBSMun = props.vIBSMun;
        }
    }
}
