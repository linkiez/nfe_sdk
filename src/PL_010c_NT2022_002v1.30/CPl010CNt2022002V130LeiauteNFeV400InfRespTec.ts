export interface IPl010CNt2022002V130LeiauteNFeV400InfRespTec {
  "@class"?: string;
  CNPJ?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400InfRespTec {
    public "@class"?: string;

    public CNPJ?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400InfRespTec) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400InfRespTec";


        if (props) {

        	this.CNPJ = props.CNPJ;
        }
    }
}
