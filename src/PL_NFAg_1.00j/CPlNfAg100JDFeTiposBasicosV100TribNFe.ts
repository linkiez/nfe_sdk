import { CPlNfAg100JDFeTiposBasicosV100AjusteCompet } from './CPlNfAg100JDFeTiposBasicosV100AjusteCompet';

import { CPlNfAg100JDFeTiposBasicosV100Cibs } from './CPlNfAg100JDFeTiposBasicosV100Cibs';

import { CPlNfAg100JDFeTiposBasicosV100CredPresIbszfm } from './CPlNfAg100JDFeTiposBasicosV100CredPresIbszfm';

import { CPlNfAg100JDFeTiposBasicosV100CredPresOper } from './CPlNfAg100JDFeTiposBasicosV100CredPresOper';

import { CPlNfAg100JDFeTiposBasicosV100EstornoCred } from './CPlNfAg100JDFeTiposBasicosV100EstornoCred';

import { CPlNfAg100JDFeTiposBasicosV100Monofasia } from './CPlNfAg100JDFeTiposBasicosV100Monofasia';

import { CPlNfAg100JDFeTiposBasicosV100TransfCred } from './CPlNfAg100JDFeTiposBasicosV100TransfCred';

import { TPlNfAg100JDFeTiposBasicosV100Cst } from './TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100IndDoacao } from './TPlNfAg100JDFeTiposBasicosV100IndDoacao';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from './TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

export interface IPlNfAg100JDFeTiposBasicosV100TribNFe {
  "@class"?: string;
  CST?: TPlNfAg100JDFeTiposBasicosV100Cst;
  cClassTrib?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
  indDoacao?: TPlNfAg100JDFeTiposBasicosV100IndDoacao;
  gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100EstornoCred;
}

export class CPlNfAg100JDFeTiposBasicosV100TribNFe {
    public "@class"?: string;

    public CST?: TPlNfAg100JDFeTiposBasicosV100Cst;
    public cClassTrib?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
    public indDoacao?: TPlNfAg100JDFeTiposBasicosV100IndDoacao;
    public gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100EstornoCred;

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

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100TribNFe) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100TribNFe";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfAg100JDFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
