import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100GEstornoCred {
  "@class"?: string;
  vIBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100GEstornoCred {
    public "@class"?: string;

    public vIBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GEstornoCred) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GEstornoCred";


        if (props) {

        	this.vIBSEstCred = props.vIBSEstCred;
        	this.vCBSEstCred = props.vCBSEstCred;
        }
    }
}
