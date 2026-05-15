import { TPlNfGas100ENfgasTiposBasicoV100Email } from './TPlNfGas100ENfgasTiposBasicoV100Email';

export interface IPlNfGas100ENfgasTiposBasicoV100Endereco {
  "@class"?: string;
  cMun?: unknown;
  UF?: unknown;
  email?: TPlNfGas100ENfgasTiposBasicoV100Email;
}

export class CPlNfGas100ENfgasTiposBasicoV100Endereco {
    public "@class"?: string;

    public cMun?: unknown;
    public UF?: unknown;
    public email?: TPlNfGas100ENfgasTiposBasicoV100Email;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Endereco) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Endereco";


        if (props) {

        	this.cMun = props.cMun;
        	this.UF = props.UF;
        	this.email = props.email;
        }
    }
}
