export interface IPl010CNt2022002V130LeiauteNFeV400ExportInd {
  "@class"?: string;
  chNFe?: unknown;
  qExport?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400ExportInd {
    public "@class"?: string;

    public chNFe?: unknown;
    public qExport?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ExportInd) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ExportInd";


        if (props) {

        	this.chNFe = props.chNFe;
        	this.qExport = props.qExport;
        }
    }
}
