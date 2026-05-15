import { CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProcEvento } from './CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProcEvento';

import { CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProtNFe } from './CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProtNFe';

import { CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107 } from './CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107';

import { TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerConsSitNFe } from './TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerConsSitNFe';

export interface IConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetConsSitNFe {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cUF?: unknown;
  chNFe?: unknown;
  protNFe?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProtNFe;
  retCancNFe?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107;
  procEventoNFe?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProcEvento[];
  $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerConsSitNFe;
}

export class CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetConsSitNFe {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cUF?: unknown;
    public chNFe?: unknown;
    public protNFe?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProtNFe;
    public retCancNFe?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107;
    public procEventoNFe?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProcEvento[];
    public $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerConsSitNFe;

    public constructor(props?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetConsSitNFe) {
        this["@class"] = ".CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetConsSitNFe";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cUF = props.cUF;
        	this.chNFe = props.chNFe;
        	this.protNFe = (props.protNFe) ? new CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProtNFe(props.protNFe): undefined;
        	this.retCancNFe = (props.retCancNFe) ? new CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107(props.retCancNFe): undefined;
        	this.procEventoNFe = props.procEventoNFe?.map(o => new CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProcEvento(o));
        	this.$versao = props.$versao;
        }
    }
}
