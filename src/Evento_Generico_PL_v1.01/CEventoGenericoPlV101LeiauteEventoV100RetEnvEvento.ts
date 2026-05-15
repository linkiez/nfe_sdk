import { CEventoGenericoPlV101LeiauteEventoV100RetEvento } from './CEventoGenericoPlV101LeiauteEventoV100RetEvento';

import { TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge } from './TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge';

import { TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento } from './TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento';

export interface IEventoGenericoPlV101LeiauteEventoV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoGenericoPlV101LeiauteEventoV100RetEvento;
  $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento;
}

export class CEventoGenericoPlV101LeiauteEventoV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoGenericoPlV101LeiauteEventoV100RetEvento;
    public $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento;

    public constructor(props?: CEventoGenericoPlV101LeiauteEventoV100RetEnvEvento) {
        this["@class"] = ".CEventoGenericoPlV101LeiauteEventoV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoGenericoPlV101LeiauteEventoV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
