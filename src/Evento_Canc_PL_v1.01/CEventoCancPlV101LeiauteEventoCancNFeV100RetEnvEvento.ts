import { CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento } from './CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge } from './TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento } from './TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento';

export interface IEventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
  $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;
}

export class CEventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
    public $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;

    public constructor(props?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento) {
        this["@class"] = ".CEventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
