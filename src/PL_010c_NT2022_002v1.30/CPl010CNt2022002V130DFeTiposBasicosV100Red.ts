import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100Red {
  "@class"?: string;
  pRedAliq?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  pAliqEfet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100Red {
    public "@class"?: string;

    public pRedAliq?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public pAliqEfet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Red) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Red";


        if (props) {

        	this.pRedAliq = props.pRedAliq;
        	this.pAliqEfet = props.pAliqEfet;
        }
    }
}
