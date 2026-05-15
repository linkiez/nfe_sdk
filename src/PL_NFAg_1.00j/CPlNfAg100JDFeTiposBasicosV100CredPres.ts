import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100CredPres {
  "@class"?: string;
  pCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100CredPres {
    public "@class"?: string;

    public pCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;

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

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100CredPres) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100CredPres";


        if (props) {

        	this.pCredPres = props.pCredPres;
        }
    }
}
