import { CPlNfAg100JDFeTiposBasicosV100GMonoDif } from './CPlNfAg100JDFeTiposBasicosV100GMonoDif';

import { CPlNfAg100JDFeTiposBasicosV100GMonoPadrao } from './CPlNfAg100JDFeTiposBasicosV100GMonoPadrao';

import { CPlNfAg100JDFeTiposBasicosV100GMonoRet } from './CPlNfAg100JDFeTiposBasicosV100GMonoRet';

import { CPlNfAg100JDFeTiposBasicosV100GMonoReten } from './CPlNfAg100JDFeTiposBasicosV100GMonoReten';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100Monofasia {
  "@class"?: string;
  gMonoPadrao?: CPlNfAg100JDFeTiposBasicosV100GMonoPadrao;
  gMonoReten?: CPlNfAg100JDFeTiposBasicosV100GMonoReten;
  gMonoRet?: CPlNfAg100JDFeTiposBasicosV100GMonoRet;
  gMonoDif?: CPlNfAg100JDFeTiposBasicosV100GMonoDif;
  vTotIBSMonoItem?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  vTotCBSMonoItem?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100Monofasia {
    public "@class"?: string;

    public gMonoPadrao?: CPlNfAg100JDFeTiposBasicosV100GMonoPadrao;
    public gMonoReten?: CPlNfAg100JDFeTiposBasicosV100GMonoReten;
    public gMonoRet?: CPlNfAg100JDFeTiposBasicosV100GMonoRet;
    public gMonoDif?: CPlNfAg100JDFeTiposBasicosV100GMonoDif;
    public vTotIBSMonoItem?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public vTotCBSMonoItem?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Monofasia) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Monofasia";


        if (props) {

        	this.gMonoPadrao = (props.gMonoPadrao) ? new CPlNfAg100JDFeTiposBasicosV100GMonoPadrao(props.gMonoPadrao): undefined;
        	this.gMonoReten = (props.gMonoReten) ? new CPlNfAg100JDFeTiposBasicosV100GMonoReten(props.gMonoReten): undefined;
        	this.gMonoRet = (props.gMonoRet) ? new CPlNfAg100JDFeTiposBasicosV100GMonoRet(props.gMonoRet): undefined;
        	this.gMonoDif = (props.gMonoDif) ? new CPlNfAg100JDFeTiposBasicosV100GMonoDif(props.gMonoDif): undefined;
        	this.vTotIBSMonoItem = props.vTotIBSMonoItem;
        	this.vTotCBSMonoItem = props.vTotCBSMonoItem;
        }
    }
}
