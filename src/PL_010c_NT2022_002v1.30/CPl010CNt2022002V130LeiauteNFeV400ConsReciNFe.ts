import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from './TPl010CNt2022002V130LeiauteNFeV400VerNFe';

export interface IPl010CNt2022002V130LeiauteNFeV400ConsReciNFe {
  "@class"?: string;
  tpAmb?: unknown;
  nRec?: unknown;
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}

export class CPl010CNt2022002V130LeiauteNFeV400ConsReciNFe {
    public "@class"?: string;

    public tpAmb?: unknown;
    public nRec?: unknown;
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ConsReciNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ConsReciNFe";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.nRec = props.nRec;
        	this.$versao = props.$versao;
        }
    }
}
