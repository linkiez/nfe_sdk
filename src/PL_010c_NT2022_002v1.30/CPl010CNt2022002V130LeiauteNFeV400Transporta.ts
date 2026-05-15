export interface IPl010CNt2022002V130LeiauteNFeV400Transporta {
  "@class"?: string;
  IE?: unknown;
  UF?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Transporta {
    public "@class"?: string;

    public IE?: unknown;
    public UF?: unknown;

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

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Transporta) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Transporta";


        if (props) {

        	this.IE = props.IE;
        	this.UF = props.UF;
        }
    }
}
