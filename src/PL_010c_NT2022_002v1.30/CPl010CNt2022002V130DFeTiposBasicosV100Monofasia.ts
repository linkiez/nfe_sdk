import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif } from './CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao } from './CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet } from './CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten } from './CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100Monofasia {
  "@class"?: string;
  gMonoPadrao?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao;
  gMonoReten?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten;
  gMonoRet?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet;
  gMonoDif?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif;
  vTotIBSMonoItem?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  vTotCBSMonoItem?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100Monofasia {
    public "@class"?: string;

    public gMonoPadrao?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao;
    public gMonoReten?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten;
    public gMonoRet?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet;
    public gMonoDif?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif;
    public vTotIBSMonoItem?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public vTotCBSMonoItem?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Monofasia) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Monofasia";


        if (props) {

        	this.gMonoPadrao = (props.gMonoPadrao) ? new CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao(props.gMonoPadrao): undefined;
        	this.gMonoReten = (props.gMonoReten) ? new CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten(props.gMonoReten): undefined;
        	this.gMonoRet = (props.gMonoRet) ? new CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet(props.gMonoRet): undefined;
        	this.gMonoDif = (props.gMonoDif) ? new CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif(props.gMonoDif): undefined;
        	this.vTotIBSMonoItem = props.vTotIBSMonoItem;
        	this.vTotCBSMonoItem = props.vTotCBSMonoItem;
        }
    }
}
