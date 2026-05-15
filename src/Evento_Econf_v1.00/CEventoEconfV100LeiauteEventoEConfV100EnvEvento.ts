import { CEventoEconfV100LeiauteEventoEConfV100Evento } from './CEventoEconfV100LeiauteEventoEConfV100Evento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento } from './TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento';

export interface IEventoEconfV100LeiauteEventoEConfV100EnvEvento {
  "@class"?: string;
  evento?: CEventoEconfV100LeiauteEventoEConfV100Evento;
  $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento;
}

export class CEventoEconfV100LeiauteEventoEConfV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoEconfV100LeiauteEventoEConfV100Evento;
    public $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento;

    public constructor(props?: CEventoEconfV100LeiauteEventoEConfV100EnvEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoEConfV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEconfV100LeiauteEventoEConfV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
