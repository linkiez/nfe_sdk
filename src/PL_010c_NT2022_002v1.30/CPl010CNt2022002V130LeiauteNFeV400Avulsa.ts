export interface IPl010CNt2022002V130LeiauteNFeV400Avulsa {
  "@class"?: string;
  CNPJ?: unknown;
  UF?: unknown;
  dEmi?: unknown;
  vDAR?: unknown;
  dPag?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Avulsa {
    public "@class"?: string;

    public CNPJ?: unknown;
    public UF?: unknown;
    public dEmi?: unknown;
    public vDAR?: unknown;
    public dPag?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Avulsa) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Avulsa";


        if (props) {

        	this.CNPJ = props.CNPJ;
        	this.UF = props.UF;
        	this.dEmi = props.dEmi;
        	this.vDAR = props.vDAR;
        	this.dPag = props.dPag;
        }
    }
}
