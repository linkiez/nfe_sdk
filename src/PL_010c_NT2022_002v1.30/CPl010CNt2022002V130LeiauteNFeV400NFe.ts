import { CPl010CNt2022002V130LeiauteNFeV400InfNFe } from './CPl010CNt2022002V130LeiauteNFeV400InfNFe';

import { CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl } from './CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl';

export interface IPl010CNt2022002V130LeiauteNFeV400NFe {
  "@class"?: string;
  unknown?: unknown;
  infNFe?: CPl010CNt2022002V130LeiauteNFeV400InfNFe;
  infNFeSupl?: CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl;
}

export class CPl010CNt2022002V130LeiauteNFeV400NFe {
    public "@class"?: string;

    public unknown?: unknown;
    public infNFe?: CPl010CNt2022002V130LeiauteNFeV400InfNFe;
    public infNFeSupl?: CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400NFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400NFe";


        if (props) {

        	this.unknown = props.unknown;
        	this.infNFe = (props.infNFe) ? new CPl010CNt2022002V130LeiauteNFeV400InfNFe(props.infNFe): undefined;
        	this.infNFeSupl = (props.infNFeSupl) ? new CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl(props.infNFeSupl): undefined;
        }
    }
}
