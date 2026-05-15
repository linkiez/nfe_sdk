import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100TransfCred {
  "@class"?: string;
  vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100TransfCred {
    public "@class"?: string;

    public vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TransfCred) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TransfCred";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        }
    }
}
