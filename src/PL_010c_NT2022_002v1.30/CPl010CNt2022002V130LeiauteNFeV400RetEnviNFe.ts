import { CPl010CNt2022002V130LeiauteNFeV400ProtNFe } from './CPl010CNt2022002V130LeiauteNFeV400ProtNFe';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from './TPl010CNt2022002V130LeiauteNFeV400VerNFe';

export interface IPl010CNt2022002V130LeiauteNFeV400RetEnviNFe {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cUF?: unknown;
  dhRecbto?: unknown;
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}

export class CPl010CNt2022002V130LeiauteNFeV400RetEnviNFe {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cUF?: unknown;
    public dhRecbto?: unknown;
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    //choice

    public infRec(arg: unknown) {
        delete((this as any).protNFe);
        (this as any).infRec = arg;
    }

    //choice

    public protNFe(arg: unknown) {
        delete((this as any).infRec);
        (this as any).protNFe = arg;
    }

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400RetEnviNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400RetEnviNFe";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cUF = props.cUF;
        	this.dhRecbto = props.dhRecbto;
        	this.$versao = props.$versao;
        }
    }
}
