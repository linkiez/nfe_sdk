import { CPlNfGas100EDFeTiposBasicosV100Gcbs } from './CPlNfGas100EDFeTiposBasicosV100Gcbs';

import { CPlNfGas100EDFeTiposBasicosV100TribCompraGov } from './CPlNfGas100EDFeTiposBasicosV100TribCompraGov';

import { CPlNfGas100EDFeTiposBasicosV100TribRegular } from './CPlNfGas100EDFeTiposBasicosV100TribRegular';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100Cibs {
  "@class"?: string;
  vBC?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  gCBS?: CPlNfGas100EDFeTiposBasicosV100Gcbs;
  gTribRegular?: CPlNfGas100EDFeTiposBasicosV100TribRegular;
  gTribCompraGov?: CPlNfGas100EDFeTiposBasicosV100TribCompraGov;
}

export class CPlNfGas100EDFeTiposBasicosV100Cibs {
    public "@class"?: string;

    public vBC?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public gCBS?: CPlNfGas100EDFeTiposBasicosV100Gcbs;
    public gTribRegular?: CPlNfGas100EDFeTiposBasicosV100TribRegular;
    public gTribCompraGov?: CPlNfGas100EDFeTiposBasicosV100TribCompraGov;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Cibs) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Cibs";


        if (props) {

        	this.vBC = props.vBC;
        	this.gCBS = (props.gCBS) ? new CPlNfGas100EDFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gTribRegular = (props.gTribRegular) ? new CPlNfGas100EDFeTiposBasicosV100TribRegular(props.gTribRegular): undefined;
        	this.gTribCompraGov = (props.gTribCompraGov) ? new CPlNfGas100EDFeTiposBasicosV100TribCompraGov(props.gTribCompraGov): undefined;
        }
    }
}
