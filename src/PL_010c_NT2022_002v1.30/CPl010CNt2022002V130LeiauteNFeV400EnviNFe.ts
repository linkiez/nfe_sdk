import { CPl010CNt2022002V130LeiauteNFeV400NFe } from './CPl010CNt2022002V130LeiauteNFeV400NFe';

import { TPl010CNt2022002V130LeiauteNFeV400IdLote } from './TPl010CNt2022002V130LeiauteNFeV400IdLote';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from './TPl010CNt2022002V130LeiauteNFeV400VerNFe';

export interface IPl010CNt2022002V130LeiauteNFeV400EnviNFe {
  "@class"?: string;
  idLote?: TPl010CNt2022002V130LeiauteNFeV400IdLote;
  NFe?: CPl010CNt2022002V130LeiauteNFeV400NFe;
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}

export class CPl010CNt2022002V130LeiauteNFeV400EnviNFe {
    public "@class"?: string;

    public idLote?: TPl010CNt2022002V130LeiauteNFeV400IdLote;
    public NFe?: CPl010CNt2022002V130LeiauteNFeV400NFe;
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400EnviNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400EnviNFe";


        if (props) {

        	this.idLote = props.idLote;
        	this.NFe = (props.NFe) ? new CPl010CNt2022002V130LeiauteNFeV400NFe(props.NFe): undefined;
        	this.$versao = props.$versao;
        }
    }
}
