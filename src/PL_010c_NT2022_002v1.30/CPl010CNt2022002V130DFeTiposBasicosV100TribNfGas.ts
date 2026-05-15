import { CPl010CNt2022002V130DFeTiposBasicosV100Cibs } from './CPl010CNt2022002V130DFeTiposBasicosV100Cibs';

import { CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred } from './CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred';

import { CPl010CNt2022002V130DFeTiposBasicosV100Monofasia } from './CPl010CNt2022002V130DFeTiposBasicosV100Monofasia';

import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from './TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao } from './TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from './TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

export interface IPl010CNt2022002V130DFeTiposBasicosV100TribNfGas {
  "@class"?: string;
  CST?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
  cClassTrib?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
  indDoacao?: TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao;
  gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100TribNfGas {
    public "@class"?: string;

    public CST?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
    public cClassTrib?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
    public indDoacao?: TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao;
    public gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred;

    //choice

    public gIBSCBS(arg: unknown) {
        delete((this as any).gIBSCBSMono);
        (this as any).gIBSCBS = arg;
    }

    //choice

    public gIBSCBSMono(arg: unknown) {
        delete((this as any).gIBSCBS);
        (this as any).gIBSCBSMono = arg;
    }

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TribNfGas) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TribNfGas";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
