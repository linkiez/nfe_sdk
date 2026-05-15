import { CPlNfGas100EDFeTiposBasicosV100Gcbs } from './CPlNfGas100EDFeTiposBasicosV100Gcbs';

import { CPlNfGas100EDFeTiposBasicosV100GEstornoCred } from './CPlNfGas100EDFeTiposBasicosV100GEstornoCred';

import { CPlNfGas100EDFeTiposBasicosV100Gibs } from './CPlNfGas100EDFeTiposBasicosV100Gibs';

import { CPlNfGas100EDFeTiposBasicosV100GMono } from './CPlNfGas100EDFeTiposBasicosV100GMono';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100IbscbsMonoTot {
  "@class"?: string;
  vBCIBSCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  gIBS?: CPlNfGas100EDFeTiposBasicosV100Gibs;
  gCBS?: CPlNfGas100EDFeTiposBasicosV100Gcbs;
  gMono?: CPlNfGas100EDFeTiposBasicosV100GMono;
  gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100GEstornoCred;
}

export class CPlNfGas100EDFeTiposBasicosV100IbscbsMonoTot {
    public "@class"?: string;

    public vBCIBSCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public gIBS?: CPlNfGas100EDFeTiposBasicosV100Gibs;
    public gCBS?: CPlNfGas100EDFeTiposBasicosV100Gcbs;
    public gMono?: CPlNfGas100EDFeTiposBasicosV100GMono;
    public gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100GEstornoCred;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100IbscbsMonoTot) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100IbscbsMonoTot";


        if (props) {

        	this.vBCIBSCBS = props.vBCIBSCBS;
        	this.gIBS = (props.gIBS) ? new CPlNfGas100EDFeTiposBasicosV100Gibs(props.gIBS): undefined;
        	this.gCBS = (props.gCBS) ? new CPlNfGas100EDFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gMono = (props.gMono) ? new CPlNfGas100EDFeTiposBasicosV100GMono(props.gMono): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfGas100EDFeTiposBasicosV100GEstornoCred(props.gEstornoCred): undefined;
        }
    }
}
