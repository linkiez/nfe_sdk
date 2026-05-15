import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100Gibsuf {
  "@class"?: string;
  vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf {
    public "@class"?: string;

    public vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf";


        if (props) {

        	this.vDif = props.vDif;
        	this.vDevTrib = props.vDevTrib;
        	this.vIBSUF = props.vIBSUF;
        }
    }
}
