export interface IPl010CNt2022002V130LeiauteNFeV400Card {
  "@class"?: string;
  CNPJ?: unknown;
  CNPJReceb?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Card {
    public "@class"?: string;

    public CNPJ?: unknown;
    public CNPJReceb?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Card) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Card";


        if (props) {

        	this.CNPJ = props.CNPJ;
        	this.CNPJReceb = props.CNPJReceb;
        }
    }
}
