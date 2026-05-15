import { CPlNfGas100ENfgasTiposBasicoV100EndeEmi } from './CPlNfGas100ENfgasTiposBasicoV100EndeEmi';

export interface IPlNfGas100ENfgasTiposBasicoV100Emit {
  "@class"?: string;
  CNPJ?: unknown;
  IE?: unknown;
  enderEmit?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;
}

export class CPlNfGas100ENfgasTiposBasicoV100Emit {
    public "@class"?: string;

    public CNPJ?: unknown;
    public IE?: unknown;
    public enderEmit?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Emit) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Emit";


        if (props) {

        	this.CNPJ = props.CNPJ;
        	this.IE = props.IE;
        	this.enderEmit = (props.enderEmit) ? new CPlNfGas100ENfgasTiposBasicoV100EndeEmi(props.enderEmit): undefined;
        }
    }
}
