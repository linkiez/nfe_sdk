import { TPlNfGas100EDFeTiposBasicosV100CompetApur } from './TPlNfGas100EDFeTiposBasicosV100CompetApur';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100AjusteCompet {
  "@class"?: string;
  competApur?: TPlNfGas100EDFeTiposBasicosV100CompetApur;
  vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100AjusteCompet {
    public "@class"?: string;

    public competApur?: TPlNfGas100EDFeTiposBasicosV100CompetApur;
    public vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100AjusteCompet) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100AjusteCompet";


        if (props) {

        	this.competApur = props.competApur;
        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        }
    }
}
