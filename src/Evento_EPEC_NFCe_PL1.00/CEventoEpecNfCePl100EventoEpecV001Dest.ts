export interface IEventoEpecNfCePl100EventoEpecV001Dest {
  "@class"?: string;
  UF?: unknown;
}

export class CEventoEpecNfCePl100EventoEpecV001Dest {
    public "@class"?: string;

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

    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001Dest) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001Dest";


        if (props) {

        	this.UF = props.UF;
        }
    }
}
