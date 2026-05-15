import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100GMonoReten {
  "@class"?: string;
  qBCMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
  adRemIBSReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vIBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  adRemCBSReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vCBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten {
    public "@class"?: string;

    public qBCMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
    public adRemIBSReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vIBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public adRemCBSReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vCBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten";


        if (props) {

        	this.qBCMonoReten = props.qBCMonoReten;
        	this.adRemIBSReten = props.adRemIBSReten;
        	this.vIBSMonoReten = props.vIBSMonoReten;
        	this.adRemCBSReten = props.adRemCBSReten;
        	this.vCBSMonoReten = props.vCBSMonoReten;
        }
    }
}
