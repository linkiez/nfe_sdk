import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100Dif {
  "@class"?: string;
  pDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100Dif {
    public "@class"?: string;

    public pDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    public vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Dif) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Dif";


        if (props) {

        	this.pDif = props.pDif;
        	this.vDif = props.vDif;
        }
    }
}
