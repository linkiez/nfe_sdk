import { TPlNfGas100ENfgasTiposBasicoV100Email } from './TPlNfGas100ENfgasTiposBasicoV100Email';

export interface IPlNfGas100ENfgasTiposBasicoV100EmpresaSoft {
  "@class"?: string;
  email?: TPlNfGas100ENfgasTiposBasicoV100Email;
}

export class CPlNfGas100ENfgasTiposBasicoV100EmpresaSoft {
    public "@class"?: string;

    public email?: TPlNfGas100ENfgasTiposBasicoV100Email;

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

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100EmpresaSoft) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100EmpresaSoft";


        if (props) {

        	this.email = props.email;
        }
    }
}
