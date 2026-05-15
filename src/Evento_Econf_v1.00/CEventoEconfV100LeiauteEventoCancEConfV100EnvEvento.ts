import { CEventoEconfV100LeiauteEventoCancEConfV100Evento } from './CEventoEconfV100LeiauteEventoCancEConfV100Evento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento } from './TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento';

export interface IEventoEconfV100LeiauteEventoCancEConfV100EnvEvento {
  "@class"?: string;
  evento?: CEventoEconfV100LeiauteEventoCancEConfV100Evento;
  $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento;
}

export class CEventoEconfV100LeiauteEventoCancEConfV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoEconfV100LeiauteEventoCancEConfV100Evento;
    public $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento;

    public constructor(props?: CEventoEconfV100LeiauteEventoCancEConfV100EnvEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoCancEConfV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEconfV100LeiauteEventoCancEConfV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
