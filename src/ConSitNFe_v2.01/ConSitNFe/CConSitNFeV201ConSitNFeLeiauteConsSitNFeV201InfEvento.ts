import { CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201DetEvento } from './CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201DetEvento';

import { TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201COrgaoIbge } from './TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201COrgaoIbge';

export interface IConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento {
  "@class"?: string;
  cOrgao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201COrgaoIbge;
  tpAmb?: unknown;
  chNFe?: unknown;
  detEvento?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201DetEvento;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  nProt?: unknown;
}

export class CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento {
    public "@class"?: string;

    public cOrgao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201COrgaoIbge;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public detEvento?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201DetEvento;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public nProt?: unknown;

    //choice

    public CNPJDest(arg: unknown) {
        delete((this as any).CPFDest);
        (this as any).CNPJDest = arg;
    }

    //choice

    public CPFDest(arg: unknown) {
        delete((this as any).CNPJDest);
        (this as any).CPFDest = arg;
    }

    public constructor(props?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento) {
        this["@class"] = ".CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.detEvento = (props.detEvento) ? new CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201DetEvento(props.detEvento): undefined;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        }
    }
}
