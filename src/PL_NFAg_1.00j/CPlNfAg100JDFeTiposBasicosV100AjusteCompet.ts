import { TPlNfAg100JDFeTiposBasicosV100CompetApur } from './TPlNfAg100JDFeTiposBasicosV100CompetApur';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100AjusteCompet {
  "@class"?: string;
  competApur?: TPlNfAg100JDFeTiposBasicosV100CompetApur;
  vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100AjusteCompet {
    public "@class"?: string;

    public competApur?: TPlNfAg100JDFeTiposBasicosV100CompetApur;
    public vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100AjusteCompet) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100AjusteCompet";


        if (props) {

        	this.competApur = props.competApur;
        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        }
    }
}
