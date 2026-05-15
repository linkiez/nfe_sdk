import { CEventoEpecPlV101LeiauteEpecV100RetEvento } from './CEventoEpecPlV101LeiauteEpecV100RetEvento';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoIbge } from './TEventoEpecPlV101LeiauteEpecV100COrgaoIbge';

import { TEventoEpecPlV101LeiauteEpecV100VerEnvEvento } from './TEventoEpecPlV101LeiauteEpecV100VerEnvEvento';

export interface IEventoEpecPlV101LeiauteEpecV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: TEventoEpecPlV101LeiauteEpecV100COrgaoIbge;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoEpecPlV101LeiauteEpecV100RetEvento;
  $versao?: TEventoEpecPlV101LeiauteEpecV100VerEnvEvento;
}

export class CEventoEpecPlV101LeiauteEpecV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: TEventoEpecPlV101LeiauteEpecV100COrgaoIbge;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoEpecPlV101LeiauteEpecV100RetEvento;
    public $versao?: TEventoEpecPlV101LeiauteEpecV100VerEnvEvento;

    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100RetEnvEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoEpecPlV101LeiauteEpecV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
