import { CPl010CNt2022002V130LeiauteNFeV400DetExport } from './CPl010CNt2022002V130LeiauteNFeV400DetExport';

import { CPl010CNt2022002V130LeiauteNFeV400Di } from './CPl010CNt2022002V130LeiauteNFeV400Di';

import { CPl010CNt2022002V130LeiauteNFeV400GCred } from './CPl010CNt2022002V130LeiauteNFeV400GCred';

import { CPl010CNt2022002V130LeiauteNFeV400InfProdEmb } from './CPl010CNt2022002V130LeiauteNFeV400InfProdEmb';

import { CPl010CNt2022002V130LeiauteNFeV400InfProdNff } from './CPl010CNt2022002V130LeiauteNFeV400InfProdNff';

import { CPl010CNt2022002V130LeiauteNFeV400Rastro } from './CPl010CNt2022002V130LeiauteNFeV400Rastro';

import { TPl010CNt2022002V130LeiauteNFeV400Guid } from './TPl010CNt2022002V130LeiauteNFeV400Guid';

export interface IPl010CNt2022002V130LeiauteNFeV400Prod {
  "@class"?: string;
  gCred?: CPl010CNt2022002V130LeiauteNFeV400GCred;
  tpCredPresIBSZFM?: unknown;
  qCom?: unknown;
  vUnCom?: unknown;
  vProd?: unknown;
  qTrib?: unknown;
  vUnTrib?: unknown;
  vFrete?: unknown;
  vSeg?: unknown;
  vDesc?: unknown;
  vOutro?: unknown;
  CPl010CNt2022002V130LeiauteNFeV400Di?: CPl010CNt2022002V130LeiauteNFeV400Di;
  detExport?: CPl010CNt2022002V130LeiauteNFeV400DetExport;
  nFCI?: TPl010CNt2022002V130LeiauteNFeV400Guid;
  rastro?: CPl010CNt2022002V130LeiauteNFeV400Rastro;
  infProdNFF?: CPl010CNt2022002V130LeiauteNFeV400InfProdNff;
  infProdEmb?: CPl010CNt2022002V130LeiauteNFeV400InfProdEmb;
}

export class CPl010CNt2022002V130LeiauteNFeV400Prod {
    public "@class"?: string;

    public gCred?: CPl010CNt2022002V130LeiauteNFeV400GCred;
    public tpCredPresIBSZFM?: unknown;
    public qCom?: unknown;
    public vUnCom?: unknown;
    public vProd?: unknown;
    public qTrib?: unknown;
    public vUnTrib?: unknown;
    public vFrete?: unknown;
    public vSeg?: unknown;
    public vDesc?: unknown;
    public vOutro?: unknown;
    public CPl010CNt2022002V130LeiauteNFeV400Di?: CPl010CNt2022002V130LeiauteNFeV400Di;
    public detExport?: CPl010CNt2022002V130LeiauteNFeV400DetExport;
    public nFCI?: TPl010CNt2022002V130LeiauteNFeV400Guid;
    public rastro?: CPl010CNt2022002V130LeiauteNFeV400Rastro;
    public infProdNFF?: CPl010CNt2022002V130LeiauteNFeV400InfProdNff;
    public infProdEmb?: CPl010CNt2022002V130LeiauteNFeV400InfProdEmb;

    //choice

    public veicProd(arg: unknown) {
        delete((this as any).med);
        delete((this as any).arma);
        delete((this as any).comb);
        (this as any).veicProd = arg;
    }

    //choice

    public med(arg: unknown) {
        delete((this as any).veicProd);
        delete((this as any).arma);
        delete((this as any).comb);
        (this as any).med = arg;
    }

    //choice

    public arma(arg: unknown) {
        delete((this as any).veicProd);
        delete((this as any).med);
        delete((this as any).comb);
        (this as any).arma = arg;
    }

    //choice

    public comb(arg: unknown) {
        delete((this as any).veicProd);
        delete((this as any).med);
        delete((this as any).arma);
        (this as any).comb = arg;
    }

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Prod) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Prod";


        if (props) {

        	this.gCred = (props.gCred) ? new CPl010CNt2022002V130LeiauteNFeV400GCred(props.gCred): undefined;
        	this.tpCredPresIBSZFM = props.tpCredPresIBSZFM;
        	this.qCom = props.qCom;
        	this.vUnCom = props.vUnCom;
        	this.vProd = props.vProd;
        	this.qTrib = props.qTrib;
        	this.vUnTrib = props.vUnTrib;
        	this.vFrete = props.vFrete;
        	this.vSeg = props.vSeg;
        	this.vDesc = props.vDesc;
        	this.vOutro = props.vOutro;
        	this.CPl010CNt2022002V130LeiauteNFeV400Di = (props.CPl010CNt2022002V130LeiauteNFeV400Di) ? new CPl010CNt2022002V130LeiauteNFeV400Di(props.CPl010CNt2022002V130LeiauteNFeV400Di): undefined;
        	this.detExport = (props.detExport) ? new CPl010CNt2022002V130LeiauteNFeV400DetExport(props.detExport): undefined;
        	this.nFCI = props.nFCI;
        	this.rastro = (props.rastro) ? new CPl010CNt2022002V130LeiauteNFeV400Rastro(props.rastro): undefined;
        	this.infProdNFF = (props.infProdNFF) ? new CPl010CNt2022002V130LeiauteNFeV400InfProdNff(props.infProdNFF): undefined;
        	this.infProdEmb = (props.infProdEmb) ? new CPl010CNt2022002V130LeiauteNFeV400InfProdEmb(props.infProdEmb): undefined;
        }
    }
}
