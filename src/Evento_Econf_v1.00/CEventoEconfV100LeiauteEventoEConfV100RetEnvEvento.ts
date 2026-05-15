import { CEventoEconfV100LeiauteEventoEConfV100TretEvento } from './CEventoEconfV100LeiauteEventoEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento } from './TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento';

export interface IEventoEconfV100LeiauteEventoEConfV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoEconfV100LeiauteEventoEConfV100TretEvento;
  $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento;
}

export class CEventoEconfV100LeiauteEventoEConfV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoEconfV100LeiauteEventoEConfV100TretEvento;
    public $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento;

    public constructor(props?: CEventoEconfV100LeiauteEventoEConfV100RetEnvEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoEConfV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoEconfV100LeiauteEventoEConfV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
