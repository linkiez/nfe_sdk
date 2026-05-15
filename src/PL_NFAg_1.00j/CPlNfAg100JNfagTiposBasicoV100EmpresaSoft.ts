import { TPlNfAg100JNfagTiposBasicoV100Email } from './TPlNfAg100JNfagTiposBasicoV100Email';

export interface IPlNfAg100JNfagTiposBasicoV100EmpresaSoft {
  "@class"?: string;
  email?: TPlNfAg100JNfagTiposBasicoV100Email;
}

export class CPlNfAg100JNfagTiposBasicoV100EmpresaSoft {
    public "@class"?: string;

    public email?: TPlNfAg100JNfagTiposBasicoV100Email;

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

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100EmpresaSoft) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100EmpresaSoft";


        if (props) {

        	this.email = props.email;
        }
    }
}
