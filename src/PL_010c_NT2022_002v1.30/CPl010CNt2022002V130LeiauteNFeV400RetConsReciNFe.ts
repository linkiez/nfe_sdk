import { CPl010CNt2022002V130LeiauteNFeV400ProtNFe } from './CPl010CNt2022002V130LeiauteNFeV400ProtNFe';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from './TPl010CNt2022002V130LeiauteNFeV400VerNFe';

export interface IPl010CNt2022002V130LeiauteNFeV400RetConsReciNFe {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  nRec?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cUF?: unknown;
  dhRecbto?: unknown;
  protNFe?: CPl010CNt2022002V130LeiauteNFeV400ProtNFe;
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}

export class CPl010CNt2022002V130LeiauteNFeV400RetConsReciNFe {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public nRec?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cUF?: unknown;
    public dhRecbto?: unknown;
    public protNFe?: CPl010CNt2022002V130LeiauteNFeV400ProtNFe;
    public $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400RetConsReciNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400RetConsReciNFe";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.nRec = props.nRec;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cUF = props.cUF;
        	this.dhRecbto = props.dhRecbto;
        	this.protNFe = (props.protNFe) ? new CPl010CNt2022002V130LeiauteNFeV400ProtNFe(props.protNFe): undefined;
        	this.$versao = props.$versao;
        }
    }
}
