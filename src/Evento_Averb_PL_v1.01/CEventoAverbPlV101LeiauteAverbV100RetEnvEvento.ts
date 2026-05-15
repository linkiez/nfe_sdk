import { CEventoAverbPlV101LeiauteAverbV100TretEvento } from './CEventoAverbPlV101LeiauteAverbV100TretEvento';

import { TEventoAverbPlV101LeiauteAverbV100VerEnvEvento } from './TEventoAverbPlV101LeiauteAverbV100VerEnvEvento';

export interface IEventoAverbPlV101LeiauteAverbV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoAverbPlV101LeiauteAverbV100TretEvento;
  $versao?: TEventoAverbPlV101LeiauteAverbV100VerEnvEvento;
}

export class CEventoAverbPlV101LeiauteAverbV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoAverbPlV101LeiauteAverbV100TretEvento;
    public $versao?: TEventoAverbPlV101LeiauteAverbV100VerEnvEvento;

    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100RetEnvEvento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoAverbPlV101LeiauteAverbV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
