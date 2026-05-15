import { CPlNfGas100EDFeTiposBasicosV100AjusteCompet } from './CPlNfGas100EDFeTiposBasicosV100AjusteCompet';

import { CPlNfGas100EDFeTiposBasicosV100Cibs } from './CPlNfGas100EDFeTiposBasicosV100Cibs';

import { CPlNfGas100EDFeTiposBasicosV100CredPresIbszfm } from './CPlNfGas100EDFeTiposBasicosV100CredPresIbszfm';

import { CPlNfGas100EDFeTiposBasicosV100CredPresOper } from './CPlNfGas100EDFeTiposBasicosV100CredPresOper';

import { CPlNfGas100EDFeTiposBasicosV100EstornoCred } from './CPlNfGas100EDFeTiposBasicosV100EstornoCred';

import { CPlNfGas100EDFeTiposBasicosV100Monofasia } from './CPlNfGas100EDFeTiposBasicosV100Monofasia';

import { CPlNfGas100EDFeTiposBasicosV100TransfCred } from './CPlNfGas100EDFeTiposBasicosV100TransfCred';

import { TPlNfGas100EDFeTiposBasicosV100Cst } from './TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100IndDoacao } from './TPlNfGas100EDFeTiposBasicosV100IndDoacao';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from './TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

export interface IPlNfGas100EDFeTiposBasicosV100TribNFe {
  "@class"?: string;
  CST?: TPlNfGas100EDFeTiposBasicosV100Cst;
  cClassTrib?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
  indDoacao?: TPlNfGas100EDFeTiposBasicosV100IndDoacao;
  gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100EstornoCred;
}

export class CPlNfGas100EDFeTiposBasicosV100TribNFe {
    public "@class"?: string;

    public CST?: TPlNfGas100EDFeTiposBasicosV100Cst;
    public cClassTrib?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
    public indDoacao?: TPlNfGas100EDFeTiposBasicosV100IndDoacao;
    public gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100EstornoCred;

    //choice

    public gIBSCBS(arg: unknown) {
        delete((this as any).gIBSCBSMono);
        delete((this as any).gTransfCred);
        delete((this as any).gAjusteCompet);
        (this as any).gIBSCBS = arg;
    }

    //choice

    public gIBSCBSMono(arg: unknown) {
        delete((this as any).gIBSCBS);
        delete((this as any).gTransfCred);
        delete((this as any).gAjusteCompet);
        (this as any).gIBSCBSMono = arg;
    }

    //choice

    public gTransfCred(arg: unknown) {
        delete((this as any).gIBSCBS);
        delete((this as any).gIBSCBSMono);
        delete((this as any).gAjusteCompet);
        (this as any).gTransfCred = arg;
    }

    //choice

    public gAjusteCompet(arg: unknown) {
        delete((this as any).gIBSCBS);
        delete((this as any).gIBSCBSMono);
        delete((this as any).gTransfCred);
        (this as any).gAjusteCompet = arg;
    }

    //choice

    public gCredPresOper(arg: unknown) {
        delete((this as any).gCredPresIBSZFM);
        (this as any).gCredPresOper = arg;
    }

    //choice

    public gCredPresIBSZFM(arg: unknown) {
        delete((this as any).gCredPresOper);
        (this as any).gCredPresIBSZFM = arg;
    }

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100TribNFe) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100TribNFe";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfGas100EDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
