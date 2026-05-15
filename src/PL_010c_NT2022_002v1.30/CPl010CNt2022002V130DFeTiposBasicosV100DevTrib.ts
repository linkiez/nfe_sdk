import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100DevTrib {
  "@class"?: string;
  vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100DevTrib {
    public "@class"?: string;

    public vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100DevTrib) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100DevTrib";


        if (props) {

        	this.vDevTrib = props.vDevTrib;
        }
    }
}
