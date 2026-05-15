import { CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado } from './CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado';

import { TPl010CNt2022002V130LeiauteNFeV400FinNFe } from './TPl010CNt2022002V130LeiauteNFeV400FinNFe';

import { TPl010CNt2022002V130LeiauteNFeV400ProcEmi } from './TPl010CNt2022002V130LeiauteNFeV400ProcEmi';

import { TPl010CNt2022002V130LeiauteNFeV400TpNfCredito } from './TPl010CNt2022002V130LeiauteNFeV400TpNfCredito';

import { TPl010CNt2022002V130LeiauteNFeV400TpNfDebito } from './TPl010CNt2022002V130LeiauteNFeV400TpNfDebito';

export interface IPl010CNt2022002V130LeiauteNFeV400Ide {
  "@class"?: string;
  cUF?: unknown;
  mod?: unknown;
  serie?: unknown;
  nNF?: unknown;
  dhEmi?: unknown;
  dhSaiEnt?: unknown;
  dPrevEntrega?: unknown;
  cMunFG?: unknown;
  cMunFGIBS?: unknown;
  tpAmb?: unknown;
  finNFe?: TPl010CNt2022002V130LeiauteNFeV400FinNFe;
  tpNFDebito?: TPl010CNt2022002V130LeiauteNFeV400TpNfDebito;
  tpNFCredito?: TPl010CNt2022002V130LeiauteNFeV400TpNfCredito;
  procEmi?: TPl010CNt2022002V130LeiauteNFeV400ProcEmi;
  gCompraGov?: unknown;
  gPagAntecipado?: CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado;
}

export class CPl010CNt2022002V130LeiauteNFeV400Ide {
    public "@class"?: string;

    public cUF?: unknown;
    public mod?: unknown;
    public serie?: unknown;
    public nNF?: unknown;
    public dhEmi?: unknown;
    public dhSaiEnt?: unknown;
    public dPrevEntrega?: unknown;
    public cMunFG?: unknown;
    public cMunFGIBS?: unknown;
    public tpAmb?: unknown;
    public finNFe?: TPl010CNt2022002V130LeiauteNFeV400FinNFe;
    public tpNFDebito?: TPl010CNt2022002V130LeiauteNFeV400TpNfDebito;
    public tpNFCredito?: TPl010CNt2022002V130LeiauteNFeV400TpNfCredito;
    public procEmi?: TPl010CNt2022002V130LeiauteNFeV400ProcEmi;
    public gCompraGov?: unknown;
    public gPagAntecipado?: CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Ide) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Ide";


        if (props) {

        	this.cUF = props.cUF;
        	this.mod = props.mod;
        	this.serie = props.serie;
        	this.nNF = props.nNF;
        	this.dhEmi = props.dhEmi;
        	this.dhSaiEnt = props.dhSaiEnt;
        	this.dPrevEntrega = props.dPrevEntrega;
        	this.cMunFG = props.cMunFG;
        	this.cMunFGIBS = props.cMunFGIBS;
        	this.tpAmb = props.tpAmb;
        	this.finNFe = props.finNFe;
        	this.tpNFDebito = props.tpNFDebito;
        	this.tpNFCredito = props.tpNFCredito;
        	this.procEmi = props.procEmi;
        	this.gCompraGov = props.gCompraGov;
        	this.gPagAntecipado = (props.gPagAntecipado) ? new CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado(props.gPagAntecipado): undefined;
        }
    }
}
