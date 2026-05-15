import { CPl010CNt2022002V130LeiauteNFeV400Lacres } from './CPl010CNt2022002V130LeiauteNFeV400Lacres';

export interface IPl010CNt2022002V130LeiauteNFeV400Vol {
  "@class"?: string;
  pesoL?: unknown;
  pesoB?: unknown;
  lacres?: CPl010CNt2022002V130LeiauteNFeV400Lacres;
}

export class CPl010CNt2022002V130LeiauteNFeV400Vol {
    public "@class"?: string;

    public pesoL?: unknown;
    public pesoB?: unknown;
    public lacres?: CPl010CNt2022002V130LeiauteNFeV400Lacres;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Vol) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Vol";


        if (props) {

        	this.pesoL = props.pesoL;
        	this.pesoB = props.pesoB;
        	this.lacres = (props.lacres) ? new CPl010CNt2022002V130LeiauteNFeV400Lacres(props.lacres): undefined;
        }
    }
}
