import { TPl010CNt2022002V130DFeTiposBasicosV100CompetApur } from './TPl010CNt2022002V130DFeTiposBasicosV100CompetApur';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100TpCredPresIbszfm } from './TPl010CNt2022002V130DFeTiposBasicosV100TpCredPresIbszfm';

export interface IPl010CNt2022002V130DFeTiposBasicosV100CredPresIbszfm {
  "@class"?: string;
  competApur?: TPl010CNt2022002V130DFeTiposBasicosV100CompetApur;
  tpCredPresIBSZFM?: TPl010CNt2022002V130DFeTiposBasicosV100TpCredPresIbszfm;
  vCredPresIBSZFM?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100CredPresIbszfm {
    public "@class"?: string;

    public competApur?: TPl010CNt2022002V130DFeTiposBasicosV100CompetApur;
    public tpCredPresIBSZFM?: TPl010CNt2022002V130DFeTiposBasicosV100TpCredPresIbszfm;
    public vCredPresIBSZFM?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100CredPresIbszfm) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100CredPresIbszfm";


        if (props) {

        	this.competApur = props.competApur;
        	this.tpCredPresIBSZFM = props.tpCredPresIBSZFM;
        	this.vCredPresIBSZFM = props.vCredPresIBSZFM;
        }
    }
}
