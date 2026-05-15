import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento';

export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento;
  $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento;
}

export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento;
    public $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento;

    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100RetEnvEvento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
