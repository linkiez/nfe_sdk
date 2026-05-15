import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100Gibsuf {
  "@class"?: string;
  vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100Gibsuf {
    public "@class"?: string;

    public vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Gibsuf) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Gibsuf";


        if (props) {

        	this.vDif = props.vDif;
        	this.vDevTrib = props.vDevTrib;
        	this.vIBSUF = props.vIBSUF;
        }
    }
}
