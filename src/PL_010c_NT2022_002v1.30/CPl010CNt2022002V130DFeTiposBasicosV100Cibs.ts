import { CPl010CNt2022002V130DFeTiposBasicosV100Gcbs } from './CPl010CNt2022002V130DFeTiposBasicosV100Gcbs';

import { CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov } from './CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov';

import { CPl010CNt2022002V130DFeTiposBasicosV100TribRegular } from './CPl010CNt2022002V130DFeTiposBasicosV100TribRegular';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100Cibs {
  "@class"?: string;
  vBC?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  gCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gcbs;
  gTribRegular?: CPl010CNt2022002V130DFeTiposBasicosV100TribRegular;
  gTribCompraGov?: CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100Cibs {
    public "@class"?: string;

    public vBC?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public gCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gcbs;
    public gTribRegular?: CPl010CNt2022002V130DFeTiposBasicosV100TribRegular;
    public gTribCompraGov?: CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Cibs) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Cibs";


        if (props) {

        	this.vBC = props.vBC;
        	this.gCBS = (props.gCBS) ? new CPl010CNt2022002V130DFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gTribRegular = (props.gTribRegular) ? new CPl010CNt2022002V130DFeTiposBasicosV100TribRegular(props.gTribRegular): undefined;
        	this.gTribCompraGov = (props.gTribCompraGov) ? new CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov(props.gTribCompraGov): undefined;
        }
    }
}
