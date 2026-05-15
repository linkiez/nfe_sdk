import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100EnteGov } from './TPlNfGas100EDFeTiposBasicosV100EnteGov';

import { TPlNfGas100EDFeTiposBasicosV100OperCompraGov } from './TPlNfGas100EDFeTiposBasicosV100OperCompraGov';

export interface IPlNfGas100EDFeTiposBasicosV100CompraGov {
  "@class"?: string;
  tpEnteGov?: TPlNfGas100EDFeTiposBasicosV100EnteGov;
  pRedutor?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  tpOperGov?: TPlNfGas100EDFeTiposBasicosV100OperCompraGov;
}

export class CPlNfGas100EDFeTiposBasicosV100CompraGov {
    public "@class"?: string;

    public tpEnteGov?: TPlNfGas100EDFeTiposBasicosV100EnteGov;
    public pRedutor?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public tpOperGov?: TPlNfGas100EDFeTiposBasicosV100OperCompraGov;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100CompraGov) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100CompraGov";


        if (props) {

        	this.tpEnteGov = props.tpEnteGov;
        	this.pRedutor = props.pRedutor;
        	this.tpOperGov = props.tpOperGov;
        }
    }
}
