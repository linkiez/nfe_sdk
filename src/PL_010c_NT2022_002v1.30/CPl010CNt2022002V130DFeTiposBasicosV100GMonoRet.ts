import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100GMonoRet {
  "@class"?: string;
  qBCMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
  adRemIBSRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vIBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  adRemCBSRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vCBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet {
    public "@class"?: string;

    public qBCMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
    public adRemIBSRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vIBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public adRemCBSRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vCBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet";


        if (props) {

        	this.qBCMonoRet = props.qBCMonoRet;
        	this.adRemIBSRet = props.adRemIBSRet;
        	this.vIBSMonoRet = props.vIBSMonoRet;
        	this.adRemCBSRet = props.adRemCBSRet;
        	this.vCBSMonoRet = props.vCBSMonoRet;
        }
    }
}
