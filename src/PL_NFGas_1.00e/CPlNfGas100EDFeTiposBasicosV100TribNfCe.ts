import { CPlNfGas100EDFeTiposBasicosV100Cibs } from './CPlNfGas100EDFeTiposBasicosV100Cibs';

import { CPlNfGas100EDFeTiposBasicosV100Monofasia } from './CPlNfGas100EDFeTiposBasicosV100Monofasia';

import { TPlNfGas100EDFeTiposBasicosV100Cst } from './TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100IndDoacao } from './TPlNfGas100EDFeTiposBasicosV100IndDoacao';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from './TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

export interface IPlNfGas100EDFeTiposBasicosV100TribNfCe {
  "@class"?: string;
  CST?: TPlNfGas100EDFeTiposBasicosV100Cst;
  cClassTrib?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
  indDoacao?: TPlNfGas100EDFeTiposBasicosV100IndDoacao;
}

export class CPlNfGas100EDFeTiposBasicosV100TribNfCe {
    public "@class"?: string;

    public CST?: TPlNfGas100EDFeTiposBasicosV100Cst;
    public cClassTrib?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
    public indDoacao?: TPlNfGas100EDFeTiposBasicosV100IndDoacao;

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

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TribNfCe) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TribNfCe";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        }
    }
}
