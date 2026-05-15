import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100GMono {
  "@class"?: string;
  vIBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vIBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vIBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vCBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100GMono {
    public "@class"?: string;

    public vIBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vIBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vIBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vCBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GMono) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GMono";


        if (props) {

        	this.vIBSMono = props.vIBSMono;
        	this.vCBSMono = props.vCBSMono;
        	this.vIBSMonoReten = props.vIBSMonoReten;
        	this.vCBSMonoReten = props.vCBSMonoReten;
        	this.vIBSMonoRet = props.vIBSMonoRet;
        	this.vCBSMonoRet = props.vCBSMonoRet;
        }
    }
}
