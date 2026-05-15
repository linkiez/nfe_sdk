import { TPlNfAg100JNfagTiposBasicoV100Email } from './TPlNfAg100JNfagTiposBasicoV100Email';

export interface IPlNfAg100JNfagTiposBasicoV100RespTec {
  "@class"?: string;
  CNPJ?: unknown;
  email?: TPlNfAg100JNfagTiposBasicoV100Email;
}

export class CPlNfAg100JNfagTiposBasicoV100RespTec {
    public "@class"?: string;

    public CNPJ?: unknown;
    public email?: TPlNfAg100JNfagTiposBasicoV100Email;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100RespTec) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100RespTec";


        if (props) {

        	this.CNPJ = props.CNPJ;
        	this.email = props.email;
        }
    }
}
