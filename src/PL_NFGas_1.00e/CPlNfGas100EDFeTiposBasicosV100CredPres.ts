import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfGas100EDFeTiposBasicosV100CredPres {
  "@class"?: string;
  pCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
}

export class CPlNfGas100EDFeTiposBasicosV100CredPres {
    public "@class"?: string;

    public pCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;

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

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100CredPres) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100CredPres";


        if (props) {

        	this.pCredPres = props.pCredPres;
        }
    }
}
