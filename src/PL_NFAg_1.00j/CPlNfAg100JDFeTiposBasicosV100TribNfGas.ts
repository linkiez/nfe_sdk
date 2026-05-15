import { CPlNfAg100JDFeTiposBasicosV100Cibs } from './CPlNfAg100JDFeTiposBasicosV100Cibs';

import { CPlNfAg100JDFeTiposBasicosV100EstornoCred } from './CPlNfAg100JDFeTiposBasicosV100EstornoCred';

import { CPlNfAg100JDFeTiposBasicosV100Monofasia } from './CPlNfAg100JDFeTiposBasicosV100Monofasia';

import { TPlNfAg100JDFeTiposBasicosV100Cst } from './TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100IndDoacao } from './TPlNfAg100JDFeTiposBasicosV100IndDoacao';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from './TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

export interface IPlNfAg100JDFeTiposBasicosV100TribNfGas {
  "@class"?: string;
  CST?: TPlNfAg100JDFeTiposBasicosV100Cst;
  cClassTrib?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
  indDoacao?: TPlNfAg100JDFeTiposBasicosV100IndDoacao;
  gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100EstornoCred;
}

export class CPlNfAg100JDFeTiposBasicosV100TribNfGas {
    public "@class"?: string;

    public CST?: TPlNfAg100JDFeTiposBasicosV100Cst;
    public cClassTrib?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
    public indDoacao?: TPlNfAg100JDFeTiposBasicosV100IndDoacao;
    public gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100EstornoCred;

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

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TribNfGas) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TribNfGas";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfAg100JDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
