import { CPlNfGas100EDFeTiposBasicosV100Cibs } from './CPlNfGas100EDFeTiposBasicosV100Cibs';

import { CPlNfGas100EDFeTiposBasicosV100EstornoCred } from './CPlNfGas100EDFeTiposBasicosV100EstornoCred';

import { TPlNfGas100EDFeTiposBasicosV100Cst } from './TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100IndDoacao } from './TPlNfGas100EDFeTiposBasicosV100IndDoacao';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from './TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

export interface IPlNfGas100EDFeTiposBasicosV100TribBPe {
  "@class"?: string;
  CST?: TPlNfGas100EDFeTiposBasicosV100Cst;
  cClassTrib?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
  indDoacao?: TPlNfGas100EDFeTiposBasicosV100IndDoacao;
  gIBSCBS?: CPlNfGas100EDFeTiposBasicosV100Cibs;
  gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100EstornoCred;
}

export class CPlNfGas100EDFeTiposBasicosV100TribBPe {
    public "@class"?: string;

    public CST?: TPlNfGas100EDFeTiposBasicosV100Cst;
    public cClassTrib?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
    public indDoacao?: TPlNfGas100EDFeTiposBasicosV100IndDoacao;
    public gIBSCBS?: CPlNfGas100EDFeTiposBasicosV100Cibs;
    public gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100EstornoCred;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TribBPe) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TribBPe";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gIBSCBS = (props.gIBSCBS) ? new CPlNfGas100EDFeTiposBasicosV100Cibs(props.gIBSCBS): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfGas100EDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
