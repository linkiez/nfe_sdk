import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100EstornoCred {
  "@class"?: string;
  vIBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100EstornoCred {
    public "@class"?: string;

    public vIBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100EstornoCred) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100EstornoCred";


        if (props) {

        	this.vIBSEstCred = props.vIBSEstCred;
        	this.vCBSEstCred = props.vCBSEstCred;
        }
    }
}
