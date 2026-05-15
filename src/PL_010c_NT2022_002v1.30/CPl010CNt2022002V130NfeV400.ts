import { TPl010CNt2022002V130NfeV400NFe } from './TPl010CNt2022002V130NfeV400NFe';

export interface IPl010CNt2022002V130NfeV400 {
  "@class"?: string;
  nFe?: TPl010CNt2022002V130NfeV400NFe;
}

export class CPl010CNt2022002V130NfeV400 {
    public "@class"?: string;

    public nFe?: TPl010CNt2022002V130NfeV400NFe;

    public constructor(props?: CPl010CNt2022002V130NfeV400) {
        this["@class"] = ".CPl010CNt2022002V130NfeV400";


        if (props) {

        	this.nFe = props.nFe;
        }
    }
}
