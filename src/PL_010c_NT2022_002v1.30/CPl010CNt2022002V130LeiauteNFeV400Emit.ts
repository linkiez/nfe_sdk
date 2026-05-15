import { CPl010CNt2022002V130LeiauteNFeV400EnderEmi } from './CPl010CNt2022002V130LeiauteNFeV400EnderEmi';

export interface IPl010CNt2022002V130LeiauteNFeV400Emit {
  "@class"?: string;
  enderEmit?: CPl010CNt2022002V130LeiauteNFeV400EnderEmi;
  IE?: unknown;
  IEST?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Emit {
    public "@class"?: string;

    public enderEmit?: CPl010CNt2022002V130LeiauteNFeV400EnderEmi;
    public IE?: unknown;
    public IEST?: unknown;

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

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Emit) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Emit";


        if (props) {

        	this.enderEmit = (props.enderEmit) ? new CPl010CNt2022002V130LeiauteNFeV400EnderEmi(props.enderEmit): undefined;
        	this.IE = props.IE;
        	this.IEST = props.IEST;
        }
    }
}
