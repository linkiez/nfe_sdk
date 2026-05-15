import { CPl010CNt2022002V130LeiauteNFeV400Dup } from './CPl010CNt2022002V130LeiauteNFeV400Dup';

import { CPl010CNt2022002V130LeiauteNFeV400Fat } from './CPl010CNt2022002V130LeiauteNFeV400Fat';

export interface IPl010CNt2022002V130LeiauteNFeV400Cobr {
  "@class"?: string;
  fat?: CPl010CNt2022002V130LeiauteNFeV400Fat;
  dup?: CPl010CNt2022002V130LeiauteNFeV400Dup;
}

export class CPl010CNt2022002V130LeiauteNFeV400Cobr {
    public "@class"?: string;

    public fat?: CPl010CNt2022002V130LeiauteNFeV400Fat;
    public dup?: CPl010CNt2022002V130LeiauteNFeV400Dup;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Cobr) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Cobr";


        if (props) {

        	this.fat = (props.fat) ? new CPl010CNt2022002V130LeiauteNFeV400Fat(props.fat): undefined;
        	this.dup = (props.dup) ? new CPl010CNt2022002V130LeiauteNFeV400Dup(props.dup): undefined;
        }
    }
}
