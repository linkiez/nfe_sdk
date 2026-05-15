import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao {
  "@class"?: string;
  qBCMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
  adRemIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  adRemCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vIBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao {
    public "@class"?: string;

    public qBCMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
    public adRemIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public adRemCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vIBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao";


        if (props) {

        	this.qBCMono = props.qBCMono;
        	this.adRemIBS = props.adRemIBS;
        	this.adRemCBS = props.adRemCBS;
        	this.vIBSMono = props.vIBSMono;
        	this.vCBSMono = props.vCBSMono;
        }
    }
}
