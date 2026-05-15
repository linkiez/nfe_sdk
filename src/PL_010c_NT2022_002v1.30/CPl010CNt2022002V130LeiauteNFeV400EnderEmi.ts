export interface IPl010CNt2022002V130LeiauteNFeV400EnderEmi {
  "@class"?: string;
  cMun?: unknown;
  UF?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400EnderEmi {
    public "@class"?: string;

    public cMun?: unknown;
    public UF?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400EnderEmi) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400EnderEmi";


        if (props) {

        	this.cMun = props.cMun;
        	this.UF = props.UF;
        }
    }
}
