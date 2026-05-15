export interface IPl010CNt2022002V130LeiauteNFeV400GCred {
  "@class"?: string;
  pCredPresumido?: unknown;
  vCredPresumido?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400GCred {
    public "@class"?: string;

    public pCredPresumido?: unknown;
    public vCredPresumido?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400GCred) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400GCred";


        if (props) {

        	this.pCredPresumido = props.pCredPresumido;
        	this.vCredPresumido = props.vCredPresumido;
        }
    }
}
