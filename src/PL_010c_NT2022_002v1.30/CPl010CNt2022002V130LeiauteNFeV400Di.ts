import { CPl010CNt2022002V130LeiauteNFeV400Adi } from './CPl010CNt2022002V130LeiauteNFeV400Adi';

export interface IPl010CNt2022002V130LeiauteNFeV400Di {
  "@class"?: string;
  dDI?: unknown;
  UFDesemb?: unknown;
  dDesemb?: unknown;
  vAFRMM?: unknown;
  UFTerceiro?: unknown;
  adi?: CPl010CNt2022002V130LeiauteNFeV400Adi;
}

export class CPl010CNt2022002V130LeiauteNFeV400Di {
    public "@class"?: string;

    public dDI?: unknown;
    public UFDesemb?: unknown;
    public dDesemb?: unknown;
    public vAFRMM?: unknown;
    public UFTerceiro?: unknown;
    public adi?: CPl010CNt2022002V130LeiauteNFeV400Adi;

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

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Di) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Di";


        if (props) {

        	this.dDI = props.dDI;
        	this.UFDesemb = props.UFDesemb;
        	this.dDesemb = props.dDesemb;
        	this.vAFRMM = props.vAFRMM;
        	this.UFTerceiro = props.UFTerceiro;
        	this.adi = (props.adi) ? new CPl010CNt2022002V130LeiauteNFeV400Adi(props.adi): undefined;
        }
    }
}
