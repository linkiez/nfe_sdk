import { TPlNfAg100JDFeTiposBasicosV100CompetApur } from './TPlNfAg100JDFeTiposBasicosV100CompetApur';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfAg100JDFeTiposBasicosV100TpCredPresIbszfm } from './TPlNfAg100JDFeTiposBasicosV100TpCredPresIbszfm';

export interface IPlNfAg100JDFeTiposBasicosV100CredPresIbszfm {
  "@class"?: string;
  competApur?: TPlNfAg100JDFeTiposBasicosV100CompetApur;
  tpCredPresIBSZFM?: TPlNfAg100JDFeTiposBasicosV100TpCredPresIbszfm;
  vCredPresIBSZFM?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100CredPresIbszfm {
    public "@class"?: string;

    public competApur?: TPlNfAg100JDFeTiposBasicosV100CompetApur;
    public tpCredPresIBSZFM?: TPlNfAg100JDFeTiposBasicosV100TpCredPresIbszfm;
    public vCredPresIBSZFM?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100CredPresIbszfm) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100CredPresIbszfm";


        if (props) {

        	this.competApur = props.competApur;
        	this.tpCredPresIBSZFM = props.tpCredPresIBSZFM;
        	this.vCredPresIBSZFM = props.vCredPresIBSZFM;
        }
    }
}
