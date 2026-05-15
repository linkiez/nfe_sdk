import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100IsTot {
  "@class"?: string;
  vIS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100IsTot {
    public "@class"?: string;

    public vIS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100IsTot) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100IsTot";


        if (props) {

        	this.vIS = props.vIS;
        }
    }
}
