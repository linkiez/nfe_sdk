import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DiaEmi } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DiaEmi';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VTotalNFe } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VTotalNFe';

export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg {
  "@class"?: string;
  nFormSeg?: unknown;
  TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest;
  tpEmis?: unknown;
  vTotalNFe?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VTotalNFe;
  indICMS?: unknown;
  indICMSST?: unknown;
  diaEmi?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DiaEmi;
}

export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg {
    public "@class"?: string;

    public nFormSeg?: unknown;
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest;
    public tpEmis?: unknown;
    public vTotalNFe?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VTotalNFe;
    public indICMS?: unknown;
    public indICMSST?: unknown;
    public diaEmi?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DiaEmi;

    //choice

    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest(arg: unknown) {
        delete((this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest);
        (this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest = arg;
    }

    //choice

    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest(arg: unknown) {
        delete((this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest);
        (this as any).TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest = arg;
    }

    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg";


        if (props) {

        	this.nFormSeg = props.nFormSeg;
        	this.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest = props.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest;
        	this.tpEmis = props.tpEmis;
        	this.vTotalNFe = props.vTotalNFe;
        	this.indICMS = props.indICMS;
        	this.indICMSST = props.indICMSST;
        	this.diaEmi = props.diaEmi;
        }
    }
}
