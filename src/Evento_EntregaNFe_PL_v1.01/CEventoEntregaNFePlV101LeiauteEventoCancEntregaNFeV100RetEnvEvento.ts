import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento } from './CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento } from './TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento';

export interface IEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento;
  $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento;
}

export class CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento;
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento;

    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100RetEnvEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
