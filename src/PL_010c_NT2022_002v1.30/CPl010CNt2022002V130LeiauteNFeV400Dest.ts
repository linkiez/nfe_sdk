import { CPl010CNt2022002V130LeiauteNFeV400Endereco } from './CPl010CNt2022002V130LeiauteNFeV400Endereco';

export interface IPl010CNt2022002V130LeiauteNFeV400Dest {
  "@class"?: string;
  enderDest?: CPl010CNt2022002V130LeiauteNFeV400Endereco;
  IE?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Dest {
    public "@class"?: string;

    public enderDest?: CPl010CNt2022002V130LeiauteNFeV400Endereco;
    public IE?: unknown;

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

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Dest) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Dest";


        if (props) {

        	this.enderDest = (props.enderDest) ? new CPl010CNt2022002V130LeiauteNFeV400Endereco(props.enderDest): undefined;
        	this.IE = props.IE;
        }
    }
}
