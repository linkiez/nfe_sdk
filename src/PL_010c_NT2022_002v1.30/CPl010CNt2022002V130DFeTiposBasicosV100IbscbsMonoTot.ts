import { CPl010CNt2022002V130DFeTiposBasicosV100Gcbs } from './CPl010CNt2022002V130DFeTiposBasicosV100Gcbs';

import { CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred } from './CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred';

import { CPl010CNt2022002V130DFeTiposBasicosV100Gibs } from './CPl010CNt2022002V130DFeTiposBasicosV100Gibs';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMono } from './CPl010CNt2022002V130DFeTiposBasicosV100GMono';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100IbscbsMonoTot {
  "@class"?: string;
  vBCIBSCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  gIBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gibs;
  gCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gcbs;
  gMono?: CPl010CNt2022002V130DFeTiposBasicosV100GMono;
  gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100IbscbsMonoTot {
    public "@class"?: string;

    public vBCIBSCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public gIBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gibs;
    public gCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gcbs;
    public gMono?: CPl010CNt2022002V130DFeTiposBasicosV100GMono;
    public gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100IbscbsMonoTot) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100IbscbsMonoTot";


        if (props) {

        	this.vBCIBSCBS = props.vBCIBSCBS;
        	this.gIBS = (props.gIBS) ? new CPl010CNt2022002V130DFeTiposBasicosV100Gibs(props.gIBS): undefined;
        	this.gCBS = (props.gCBS) ? new CPl010CNt2022002V130DFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gMono = (props.gMono) ? new CPl010CNt2022002V130DFeTiposBasicosV100GMono(props.gMono): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred(props.gEstornoCred): undefined;
        }
    }
}
