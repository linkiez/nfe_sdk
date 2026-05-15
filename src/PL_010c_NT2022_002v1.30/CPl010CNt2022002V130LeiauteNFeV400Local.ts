export interface IPl010CNt2022002V130LeiauteNFeV400Local {
  "@class"?: string;
  cMun?: unknown;
  UF?: unknown;
  IE?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Local {
    public "@class"?: string;

    public cMun?: unknown;
    public UF?: unknown;
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

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Local) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Local";


        if (props) {

        	this.cMun = props.cMun;
        	this.UF = props.UF;
        	this.IE = props.IE;
        }
    }
}
