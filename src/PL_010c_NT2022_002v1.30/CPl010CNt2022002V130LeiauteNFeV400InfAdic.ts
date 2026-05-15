import { CPl010CNt2022002V130LeiauteNFeV400ObsCont } from './CPl010CNt2022002V130LeiauteNFeV400ObsCont';

import { CPl010CNt2022002V130LeiauteNFeV400ObsFisco } from './CPl010CNt2022002V130LeiauteNFeV400ObsFisco';

import { CPl010CNt2022002V130LeiauteNFeV400ProcRef } from './CPl010CNt2022002V130LeiauteNFeV400ProcRef';

export interface IPl010CNt2022002V130LeiauteNFeV400InfAdic {
  "@class"?: string;
  obsCont?: CPl010CNt2022002V130LeiauteNFeV400ObsCont;
  obsFisco?: CPl010CNt2022002V130LeiauteNFeV400ObsFisco;
  procRef?: CPl010CNt2022002V130LeiauteNFeV400ProcRef;
}

export class CPl010CNt2022002V130LeiauteNFeV400InfAdic {
    public "@class"?: string;

    public obsCont?: CPl010CNt2022002V130LeiauteNFeV400ObsCont;
    public obsFisco?: CPl010CNt2022002V130LeiauteNFeV400ObsFisco;
    public procRef?: CPl010CNt2022002V130LeiauteNFeV400ProcRef;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400InfAdic) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400InfAdic";


        if (props) {

        	this.obsCont = (props.obsCont) ? new CPl010CNt2022002V130LeiauteNFeV400ObsCont(props.obsCont): undefined;
        	this.obsFisco = (props.obsFisco) ? new CPl010CNt2022002V130LeiauteNFeV400ObsFisco(props.obsFisco): undefined;
        	this.procRef = (props.procRef) ? new CPl010CNt2022002V130LeiauteNFeV400ProcRef(props.procRef): undefined;
        }
    }
}
