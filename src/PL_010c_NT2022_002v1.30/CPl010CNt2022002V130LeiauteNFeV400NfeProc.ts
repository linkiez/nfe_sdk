import { CPl010CNt2022002V130LeiauteNFeV400NFe } from './CPl010CNt2022002V130LeiauteNFeV400NFe';

import { CPl010CNt2022002V130LeiauteNFeV400ProtNFe } from './CPl010CNt2022002V130LeiauteNFeV400ProtNFe';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from './TPl010CNt2022002V130LeiauteNFeV400VerNFe';

export interface IPl010CNt2022002V130LeiauteNFeV400NfeProc {
  "@class"?: string;
  NFe?: CPl010CNt2022002V130LeiauteNFeV400NFe;
  protNFe?: CPl010CNt2022002V130LeiauteNFeV400ProtNFe;
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}

export class CPl010CNt2022002V130LeiauteNFeV400NfeProc {
    public "@class"?: string;

    public NFe?: CPl010CNt2022002V130LeiauteNFeV400NFe;
    public protNFe?: CPl010CNt2022002V130LeiauteNFeV400ProtNFe;
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400NfeProc) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400NfeProc";


        if (props) {

        	this.NFe = (props.NFe) ? new CPl010CNt2022002V130LeiauteNFeV400NFe(props.NFe): undefined;
        	this.protNFe = (props.protNFe) ? new CPl010CNt2022002V130LeiauteNFeV400ProtNFe(props.protNFe): undefined;
        	this.$versao = props.$versao;
        }
    }
}
