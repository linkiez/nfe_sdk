import { CEventoEconfV100LeiauteEventoCancEConfV100TretEvento } from './CEventoEconfV100LeiauteEventoCancEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento } from './TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento';

export interface IEventoEconfV100LeiauteEventoCancEConfV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoEconfV100LeiauteEventoCancEConfV100TretEvento;
  $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento;
}

export class CEventoEconfV100LeiauteEventoCancEConfV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoEconfV100LeiauteEventoCancEConfV100TretEvento;
    public $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento;

    public constructor(props?: CEventoEconfV100LeiauteEventoCancEConfV100RetEnvEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoCancEConfV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoEconfV100LeiauteEventoCancEConfV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
