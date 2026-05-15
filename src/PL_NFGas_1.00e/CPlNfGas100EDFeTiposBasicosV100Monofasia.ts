import { CPlNfGas100EDFeTiposBasicosV100GMonoDif } from './CPlNfGas100EDFeTiposBasicosV100GMonoDif';

import { CPlNfGas100EDFeTiposBasicosV100GMonoPadrao } from './CPlNfGas100EDFeTiposBasicosV100GMonoPadrao';

import { CPlNfGas100EDFeTiposBasicosV100GMonoRet } from './CPlNfGas100EDFeTiposBasicosV100GMonoRet';

import { CPlNfGas100EDFeTiposBasicosV100GMonoReten } from './CPlNfGas100EDFeTiposBasicosV100GMonoReten';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100Monofasia {
  "@class"?: string;
  gMonoPadrao?: CPlNfGas100EDFeTiposBasicosV100GMonoPadrao;
  gMonoReten?: CPlNfGas100EDFeTiposBasicosV100GMonoReten;
  gMonoRet?: CPlNfGas100EDFeTiposBasicosV100GMonoRet;
  gMonoDif?: CPlNfGas100EDFeTiposBasicosV100GMonoDif;
  vTotIBSMonoItem?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  vTotCBSMonoItem?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100Monofasia {
    public "@class"?: string;

    public gMonoPadrao?: CPlNfGas100EDFeTiposBasicosV100GMonoPadrao;
    public gMonoReten?: CPlNfGas100EDFeTiposBasicosV100GMonoReten;
    public gMonoRet?: CPlNfGas100EDFeTiposBasicosV100GMonoRet;
    public gMonoDif?: CPlNfGas100EDFeTiposBasicosV100GMonoDif;
    public vTotIBSMonoItem?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public vTotCBSMonoItem?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Monofasia) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Monofasia";


        if (props) {

        	this.gMonoPadrao = (props.gMonoPadrao) ? new CPlNfGas100EDFeTiposBasicosV100GMonoPadrao(props.gMonoPadrao): undefined;
        	this.gMonoReten = (props.gMonoReten) ? new CPlNfGas100EDFeTiposBasicosV100GMonoReten(props.gMonoReten): undefined;
        	this.gMonoRet = (props.gMonoRet) ? new CPlNfGas100EDFeTiposBasicosV100GMonoRet(props.gMonoRet): undefined;
        	this.gMonoDif = (props.gMonoDif) ? new CPlNfGas100EDFeTiposBasicosV100GMonoDif(props.gMonoDif): undefined;
        	this.vTotIBSMonoItem = props.vTotIBSMonoItem;
        	this.vTotCBSMonoItem = props.vTotCBSMonoItem;
        }
    }
}
