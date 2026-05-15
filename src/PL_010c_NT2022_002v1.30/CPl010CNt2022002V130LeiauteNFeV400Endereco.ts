export interface IPl010CNt2022002V130LeiauteNFeV400Endereco {
  "@class"?: string;
  cMun?: unknown;
  UF?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Endereco {
    public "@class"?: string;

    public cMun?: unknown;
    public UF?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Endereco) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Endereco";


        if (props) {

        	this.cMun = props.cMun;
        	this.UF = props.UF;
        }
    }
}
