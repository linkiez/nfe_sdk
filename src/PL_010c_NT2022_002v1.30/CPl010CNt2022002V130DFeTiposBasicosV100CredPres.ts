import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

export interface IPl010CNt2022002V130DFeTiposBasicosV100CredPres {
  "@class"?: string;
  pCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100CredPres {
    public "@class"?: string;

    public pCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;

    //choice

    public vCredPres(arg: unknown) {
        delete((this as any).vCredPresCondSus);
        (this as any).vCredPres = arg;
    }

    //choice

    public vCredPresCondSus(arg: unknown) {
        delete((this as any).vCredPres);
        (this as any).vCredPresCondSus = arg;
    }

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100CredPres) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100CredPres";


        if (props) {

        	this.pCredPres = props.pCredPres;
        }
    }
}
