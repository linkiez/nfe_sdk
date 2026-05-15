import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100GMonoDif {
  "@class"?: string;
  pDifIBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vIBSMonoDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  pDifCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vCBSMonoDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100GMonoDif {
    public "@class"?: string;

    public pDifIBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vIBSMonoDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public pDifCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vCBSMonoDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GMonoDif) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GMonoDif";


        if (props) {

        	this.pDifIBS = props.pDifIBS;
        	this.vIBSMonoDif = props.vIBSMonoDif;
        	this.pDifCBS = props.pDifCBS;
        	this.vCBSMonoDif = props.vCBSMonoDif;
        }
    }
}
