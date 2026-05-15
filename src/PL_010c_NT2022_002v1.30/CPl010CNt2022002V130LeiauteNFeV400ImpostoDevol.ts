import { CPl010CNt2022002V130LeiauteNFeV400Ipi } from './CPl010CNt2022002V130LeiauteNFeV400Ipi';

export interface IPl010CNt2022002V130LeiauteNFeV400ImpostoDevol {
  "@class"?: string;
  pDevol?: unknown;
  CPl010CNt2022002V130LeiauteNFeV400Ipi?: CPl010CNt2022002V130LeiauteNFeV400Ipi;
}

export class CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol {
    public "@class"?: string;

    public pDevol?: unknown;
    public CPl010CNt2022002V130LeiauteNFeV400Ipi?: CPl010CNt2022002V130LeiauteNFeV400Ipi;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol";


        if (props) {

        	this.pDevol = props.pDevol;
        	this.CPl010CNt2022002V130LeiauteNFeV400Ipi = (props.CPl010CNt2022002V130LeiauteNFeV400Ipi) ? new CPl010CNt2022002V130LeiauteNFeV400Ipi(props.CPl010CNt2022002V130LeiauteNFeV400Ipi): undefined;
        }
    }
}
