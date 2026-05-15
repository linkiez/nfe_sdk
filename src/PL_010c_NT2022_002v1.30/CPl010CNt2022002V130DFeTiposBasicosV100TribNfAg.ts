import { CPl010CNt2022002V130DFeTiposBasicosV100Cibs } from './CPl010CNt2022002V130DFeTiposBasicosV100Cibs';

import { CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred } from './CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred';

import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from './TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao } from './TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from './TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

export interface IPl010CNt2022002V130DFeTiposBasicosV100TribNfAg {
  "@class"?: string;
  CST?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
  cClassTrib?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
  indDoacao?: TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao;
  gIBSCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Cibs;
  gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100TribNfAg {
    public "@class"?: string;

    public CST?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
    public cClassTrib?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
    public indDoacao?: TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao;
    public gIBSCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Cibs;
    public gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TribNfAg) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TribNfAg";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gIBSCBS = (props.gIBSCBS) ? new CPl010CNt2022002V130DFeTiposBasicosV100Cibs(props.gIBSCBS): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
