import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100EnteGov } from './TPl010CNt2022002V130DFeTiposBasicosV100EnteGov';

export interface IPl010CNt2022002V130DFeTiposBasicosV100CompraGovReduzido {
  "@class"?: string;
  tpEnteGov?: TPl010CNt2022002V130DFeTiposBasicosV100EnteGov;
  pRedutor?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100CompraGovReduzido {
    public "@class"?: string;

    public tpEnteGov?: TPl010CNt2022002V130DFeTiposBasicosV100EnteGov;
    public pRedutor?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100CompraGovReduzido) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100CompraGovReduzido";


        if (props) {

        	this.tpEnteGov = props.tpEnteGov;
        	this.pRedutor = props.pRedutor;
        }
    }
}
