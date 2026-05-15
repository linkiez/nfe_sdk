import { CPlNfAg100JDFeTiposBasicosV100Cibs } from './CPlNfAg100JDFeTiposBasicosV100Cibs';

import { CPlNfAg100JDFeTiposBasicosV100EstornoCred } from './CPlNfAg100JDFeTiposBasicosV100EstornoCred';

import { TPlNfAg100JDFeTiposBasicosV100Cst } from './TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100IndDoacao } from './TPlNfAg100JDFeTiposBasicosV100IndDoacao';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from './TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

export interface IPlNfAg100JDFeTiposBasicosV100TribBPe {
  "@class"?: string;
  CST?: TPlNfAg100JDFeTiposBasicosV100Cst;
  cClassTrib?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
  indDoacao?: TPlNfAg100JDFeTiposBasicosV100IndDoacao;
  gIBSCBS?: CPlNfAg100JDFeTiposBasicosV100Cibs;
  gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100EstornoCred;
}

export class CPlNfAg100JDFeTiposBasicosV100TribBPe {
    public "@class"?: string;

    public CST?: TPlNfAg100JDFeTiposBasicosV100Cst;
    public cClassTrib?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
    public indDoacao?: TPlNfAg100JDFeTiposBasicosV100IndDoacao;
    public gIBSCBS?: CPlNfAg100JDFeTiposBasicosV100Cibs;
    public gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100EstornoCred;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TribBPe) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TribBPe";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gIBSCBS = (props.gIBSCBS) ? new CPlNfAg100JDFeTiposBasicosV100Cibs(props.gIBSCBS): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfAg100JDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
