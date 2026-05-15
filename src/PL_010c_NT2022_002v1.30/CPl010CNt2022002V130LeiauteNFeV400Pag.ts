import { CPl010CNt2022002V130LeiauteNFeV400DetPag } from './CPl010CNt2022002V130LeiauteNFeV400DetPag';

export interface IPl010CNt2022002V130LeiauteNFeV400Pag {
  "@class"?: string;
  detPag?: CPl010CNt2022002V130LeiauteNFeV400DetPag;
  vTroco?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Pag {
    public "@class"?: string;

    public detPag?: CPl010CNt2022002V130LeiauteNFeV400DetPag;
    public vTroco?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Pag) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Pag";


        if (props) {

        	this.detPag = (props.detPag) ? new CPl010CNt2022002V130LeiauteNFeV400DetPag(props.detPag): undefined;
        	this.vTroco = props.vTroco;
        }
    }
}
