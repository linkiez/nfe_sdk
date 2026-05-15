import { TPlNfGas100EDFeTiposBasicosV100CompetApur } from './TPlNfGas100EDFeTiposBasicosV100CompetApur';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfGas100EDFeTiposBasicosV100TpCredPresIbszfm } from './TPlNfGas100EDFeTiposBasicosV100TpCredPresIbszfm';

export interface IPlNfGas100EDFeTiposBasicosV100CredPresIbszfm {
  "@class"?: string;
  competApur?: TPlNfGas100EDFeTiposBasicosV100CompetApur;
  tpCredPresIBSZFM?: TPlNfGas100EDFeTiposBasicosV100TpCredPresIbszfm;
  vCredPresIBSZFM?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100CredPresIbszfm {
    public "@class"?: string;

    public competApur?: TPlNfGas100EDFeTiposBasicosV100CompetApur;
    public tpCredPresIBSZFM?: TPlNfGas100EDFeTiposBasicosV100TpCredPresIbszfm;
    public vCredPresIBSZFM?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100CredPresIbszfm) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100CredPresIbszfm";


        if (props) {

        	this.competApur = props.competApur;
        	this.tpCredPresIBSZFM = props.tpCredPresIBSZFM;
        	this.vCredPresIBSZFM = props.vCredPresIBSZFM;
        }
    }
}
