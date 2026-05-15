import { CPl010CNt2022002V130LeiauteNFeV400ObsCont } from './CPl010CNt2022002V130LeiauteNFeV400ObsCont';

import { CPl010CNt2022002V130LeiauteNFeV400ObsFisco } from './CPl010CNt2022002V130LeiauteNFeV400ObsFisco';

export interface IPl010CNt2022002V130LeiauteNFeV400ObsItem {
  "@class"?: string;
  obsCont?: CPl010CNt2022002V130LeiauteNFeV400ObsCont;
  obsFisco?: CPl010CNt2022002V130LeiauteNFeV400ObsFisco;
}

export class CPl010CNt2022002V130LeiauteNFeV400ObsItem {
    public "@class"?: string;

    public obsCont?: CPl010CNt2022002V130LeiauteNFeV400ObsCont;
    public obsFisco?: CPl010CNt2022002V130LeiauteNFeV400ObsFisco;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ObsItem) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ObsItem";


        if (props) {

        	this.obsCont = (props.obsCont) ? new CPl010CNt2022002V130LeiauteNFeV400ObsCont(props.obsCont): undefined;
        	this.obsFisco = (props.obsFisco) ? new CPl010CNt2022002V130LeiauteNFeV400ObsFisco(props.obsFisco): undefined;
        }
    }
}
