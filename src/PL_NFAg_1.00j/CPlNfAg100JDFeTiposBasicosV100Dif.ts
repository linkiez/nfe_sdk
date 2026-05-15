import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100Dif {
  "@class"?: string;
  pDif?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100Dif {
    public "@class"?: string;

    public pDif?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Dif) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Dif";


        if (props) {

        	this.pDif = props.pDif;
        	this.vDif = props.vDif;
        }
    }
}
