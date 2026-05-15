import { TPlNfGas100ENfgasTiposBasicoV100Email } from './TPlNfGas100ENfgasTiposBasicoV100Email';

export interface IPlNfGas100ENfgasTiposBasicoV100RespTec {
  "@class"?: string;
  CNPJ?: unknown;
  email?: TPlNfGas100ENfgasTiposBasicoV100Email;
}

export class CPlNfGas100ENfgasTiposBasicoV100RespTec {
    public "@class"?: string;

    public CNPJ?: unknown;
    public email?: TPlNfGas100ENfgasTiposBasicoV100Email;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100RespTec) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100RespTec";


        if (props) {

        	this.CNPJ = props.CNPJ;
        	this.email = props.email;
        }
    }
}
