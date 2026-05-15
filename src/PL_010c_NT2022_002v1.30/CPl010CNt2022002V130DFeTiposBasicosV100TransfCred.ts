import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100TransfCred {
  "@class"?: string;
  vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100TransfCred {
    public "@class"?: string;

    public vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TransfCred) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TransfCred";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        }
    }
}
