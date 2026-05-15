import { TPl010CNt2022002V130DFeTiposBasicosV100CompetApur } from './TPl010CNt2022002V130DFeTiposBasicosV100CompetApur';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet {
  "@class"?: string;
  competApur?: TPl010CNt2022002V130DFeTiposBasicosV100CompetApur;
  vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet {
    public "@class"?: string;

    public competApur?: TPl010CNt2022002V130DFeTiposBasicosV100CompetApur;
    public vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet";


        if (props) {

        	this.competApur = props.competApur;
        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        }
    }
}
