import { CPlNfAg100JDFeTiposBasicosV100Gcbs } from './CPlNfAg100JDFeTiposBasicosV100Gcbs';

import { CPlNfAg100JDFeTiposBasicosV100GEstornoCred } from './CPlNfAg100JDFeTiposBasicosV100GEstornoCred';

import { CPlNfAg100JDFeTiposBasicosV100Gibs } from './CPlNfAg100JDFeTiposBasicosV100Gibs';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100IbscbsTot {
  "@class"?: string;
  vBCIBSCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  gIBS?: CPlNfAg100JDFeTiposBasicosV100Gibs;
  gCBS?: CPlNfAg100JDFeTiposBasicosV100Gcbs;
  gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100GEstornoCred;
}

export class CPlNfAg100JDFeTiposBasicosV100IbscbsTot {
    public "@class"?: string;

    public vBCIBSCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public gIBS?: CPlNfAg100JDFeTiposBasicosV100Gibs;
    public gCBS?: CPlNfAg100JDFeTiposBasicosV100Gcbs;
    public gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100GEstornoCred;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100IbscbsTot) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100IbscbsTot";


        if (props) {

        	this.vBCIBSCBS = props.vBCIBSCBS;
        	this.gIBS = (props.gIBS) ? new CPlNfAg100JDFeTiposBasicosV100Gibs(props.gIBS): undefined;
        	this.gCBS = (props.gCBS) ? new CPlNfAg100JDFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfAg100JDFeTiposBasicosV100GEstornoCred(props.gEstornoCred): undefined;
        }
    }
}
