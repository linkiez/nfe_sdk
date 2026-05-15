import { CPl010CNt2022002V130LeiauteNFeV400Card } from './CPl010CNt2022002V130LeiauteNFeV400Card';

export interface IPl010CNt2022002V130LeiauteNFeV400DetPag {
  "@class"?: string;
  vPag?: unknown;
  dPag?: unknown;
  card?: CPl010CNt2022002V130LeiauteNFeV400Card;
}

export class CPl010CNt2022002V130LeiauteNFeV400DetPag {
    public "@class"?: string;

    public vPag?: unknown;
    public dPag?: unknown;
    public card?: CPl010CNt2022002V130LeiauteNFeV400Card;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400DetPag) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400DetPag";


        if (props) {

        	this.vPag = props.vPag;
        	this.dPag = props.dPag;
        	this.card = (props.card) ? new CPl010CNt2022002V130LeiauteNFeV400Card(props.card): undefined;
        }
    }
}
