import { CPlNfGas100ENfgasTiposBasicoV100EndeEmi } from './CPlNfGas100ENfgasTiposBasicoV100EndeEmi';

export interface IPlNfGas100ENfgasTiposBasicoV100Dest {
  "@class"?: string;
  IE?: unknown;
  enderDest?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;
}

export class CPlNfGas100ENfgasTiposBasicoV100Dest {
    public "@class"?: string;

    public IE?: unknown;
    public enderDest?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;

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

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Dest) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Dest";


        if (props) {

        	this.IE = props.IE;
        	this.enderDest = (props.enderDest) ? new CPlNfGas100ENfgasTiposBasicoV100EndeEmi(props.enderDest): undefined;
        }
    }
}
