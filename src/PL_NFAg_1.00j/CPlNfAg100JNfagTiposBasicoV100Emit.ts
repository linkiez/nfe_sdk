import { CPlNfAg100JNfagTiposBasicoV100EndeEmi } from './CPlNfAg100JNfagTiposBasicoV100EndeEmi';

export interface IPlNfAg100JNfagTiposBasicoV100Emit {
  "@class"?: string;
  CNPJ?: unknown;
  IE?: unknown;
  enderEmit?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;
}

export class CPlNfAg100JNfagTiposBasicoV100Emit {
    public "@class"?: string;

    public CNPJ?: unknown;
    public IE?: unknown;
    public enderEmit?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Emit) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Emit";


        if (props) {

        	this.CNPJ = props.CNPJ;
        	this.IE = props.IE;
        	this.enderEmit = (props.enderEmit) ? new CPlNfAg100JNfagTiposBasicoV100EndeEmi(props.enderEmit): undefined;
        }
    }
}
