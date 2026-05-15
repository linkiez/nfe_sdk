import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100GibsMun {
  "@class"?: string;
  vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100GibsMun {
    public "@class"?: string;

    public vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GibsMun) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GibsMun";


        if (props) {

        	this.vDif = props.vDif;
        	this.vDevTrib = props.vDevTrib;
        	this.vIBSMun = props.vIBSMun;
        }
    }
}
