import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100Dif {
  "@class"?: string;
  pDif?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100Dif {
    public "@class"?: string;

    public pDif?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    public vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Dif) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Dif";


        if (props) {

        	this.pDif = props.pDif;
        	this.vDif = props.vDif;
        }
    }
}
