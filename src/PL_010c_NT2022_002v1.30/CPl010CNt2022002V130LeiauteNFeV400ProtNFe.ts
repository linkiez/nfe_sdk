import { CPl010CNt2022002V130LeiauteNFeV400InfProt } from './CPl010CNt2022002V130LeiauteNFeV400InfProt';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from './TPl010CNt2022002V130LeiauteNFeV400VerNFe';

export interface IPl010CNt2022002V130LeiauteNFeV400ProtNFe {
  "@class"?: string;
  unknown?: unknown;
  infProt?: CPl010CNt2022002V130LeiauteNFeV400InfProt;
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}

export class CPl010CNt2022002V130LeiauteNFeV400ProtNFe {
    public "@class"?: string;

    public unknown?: unknown;
    public infProt?: CPl010CNt2022002V130LeiauteNFeV400InfProt;
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ProtNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ProtNFe";


        if (props) {

        	this.unknown = props.unknown;
        	this.infProt = (props.infProt) ? new CPl010CNt2022002V130LeiauteNFeV400InfProt(props.infProt): undefined;
        	this.$versao = props.$versao;
        }
    }
}
