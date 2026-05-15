import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento } from './TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento';

export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento;
  $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento;
}

export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento;
    public $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento;

    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEnvEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
