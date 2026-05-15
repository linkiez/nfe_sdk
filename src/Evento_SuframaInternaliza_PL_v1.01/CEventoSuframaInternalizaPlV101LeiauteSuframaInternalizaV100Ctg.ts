import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DiaEmi } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DiaEmi';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VTotalNFe } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VTotalNFe';

export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg {
  "@class"?: string;
  nFormSeg?: unknown;
  TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest;
  tpEmis?: unknown;
  vTotalNFe?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VTotalNFe;
  indICMS?: unknown;
  indICMSST?: unknown;
  diaEmi?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DiaEmi;
}

export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg {
    public "@class"?: string;

    public nFormSeg?: unknown;
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest;
    public tpEmis?: unknown;
    public vTotalNFe?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VTotalNFe;
    public indICMS?: unknown;
    public indICMSST?: unknown;
    public diaEmi?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DiaEmi;

    //choice

    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest(arg: unknown) {
        delete((this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest);
        (this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest = arg;
    }

    //choice

    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest(arg: unknown) {
        delete((this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest);
        (this as any).TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest = arg;
    }

    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg";


        if (props) {

        	this.nFormSeg = props.nFormSeg;
        	this.TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest = props.TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest;
        	this.tpEmis = props.tpEmis;
        	this.vTotalNFe = props.vTotalNFe;
        	this.indICMS = props.indICMS;
        	this.indICMSST = props.indICMSST;
        	this.diaEmi = props.diaEmi;
        }
    }
}
