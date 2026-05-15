import { CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet } from './CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet';

import { CPl010CNt2022002V130DFeTiposBasicosV100Cibs } from './CPl010CNt2022002V130DFeTiposBasicosV100Cibs';

import { CPl010CNt2022002V130DFeTiposBasicosV100CredPresIbszfm } from './CPl010CNt2022002V130DFeTiposBasicosV100CredPresIbszfm';

import { CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper } from './CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper';

import { CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred } from './CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred';

import { CPl010CNt2022002V130DFeTiposBasicosV100Monofasia } from './CPl010CNt2022002V130DFeTiposBasicosV100Monofasia';

import { CPl010CNt2022002V130DFeTiposBasicosV100TransfCred } from './CPl010CNt2022002V130DFeTiposBasicosV100TransfCred';

import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from './TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao } from './TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from './TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

export interface IPl010CNt2022002V130DFeTiposBasicosV100TribNFe {
  "@class"?: string;
  CST?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
  cClassTrib?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
  indDoacao?: TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao;
  gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100TribNFe {
    public "@class"?: string;

    public CST?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
    public cClassTrib?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
    public indDoacao?: TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao;
    public gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred;

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

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100TribNFe) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100TribNFe";


        if (props) {

        	this.CST = props.CST;
        	this.cClassTrib = props.cClassTrib;
        	this.indDoacao = props.indDoacao;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred(props.gEstornoCred): undefined;
        }
    }
}
