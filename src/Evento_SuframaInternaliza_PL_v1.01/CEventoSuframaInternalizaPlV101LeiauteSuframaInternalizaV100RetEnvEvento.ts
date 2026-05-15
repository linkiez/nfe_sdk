import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento';

export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento;
  $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento;
}

export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento;
    public $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento;

    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100RetEnvEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
