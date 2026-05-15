import { CPl010CNt2022002V130LeiauteNFeV400ExportInd } from './CPl010CNt2022002V130LeiauteNFeV400ExportInd';

export interface IPl010CNt2022002V130LeiauteNFeV400DetExport {
  "@class"?: string;
  exportInd?: CPl010CNt2022002V130LeiauteNFeV400ExportInd;
}

export class CPl010CNt2022002V130LeiauteNFeV400DetExport {
    public "@class"?: string;

    public exportInd?: CPl010CNt2022002V130LeiauteNFeV400ExportInd;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400DetExport) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400DetExport";


        if (props) {

        	this.exportInd = (props.exportInd) ? new CPl010CNt2022002V130LeiauteNFeV400ExportInd(props.exportInd): undefined;
        }
    }
}
