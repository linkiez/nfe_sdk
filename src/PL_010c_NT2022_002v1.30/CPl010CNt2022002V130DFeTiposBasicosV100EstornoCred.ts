import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100EstornoCred {
  "@class"?: string;
  vIBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred {
    public "@class"?: string;

    public vIBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred";


        if (props) {

        	this.vIBSEstCred = props.vIBSEstCred;
        	this.vCBSEstCred = props.vCBSEstCred;
        }
    }
}
