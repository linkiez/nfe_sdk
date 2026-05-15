import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100GMonoDif {
  "@class"?: string;
  pDifIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vIBSMonoDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  pDifCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vCBSMonoDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif {
    public "@class"?: string;

    public pDifIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vIBSMonoDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public pDifCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vCBSMonoDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif";


        if (props) {

        	this.pDifIBS = props.pDifIBS;
        	this.vIBSMonoDif = props.vIBSMonoDif;
        	this.pDifCBS = props.pDifCBS;
        	this.vCBSMonoDif = props.vCBSMonoDif;
        }
    }
}
