import { CPlNfAg100JNfagTiposBasicoV100EndeEmi } from './CPlNfAg100JNfagTiposBasicoV100EndeEmi';

export interface IPlNfAg100JNfagTiposBasicoV100Dest {
  "@class"?: string;
  IE?: unknown;
  enderDest?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;
}

export class CPlNfAg100JNfagTiposBasicoV100Dest {
    public "@class"?: string;

    public IE?: unknown;
    public enderDest?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;

    //choice

    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Dest) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Dest";


        if (props) {

        	this.IE = props.IE;
        	this.enderDest = (props.enderDest) ? new CPlNfAg100JNfagTiposBasicoV100EndeEmi(props.enderDest): undefined;
        }
    }
}
