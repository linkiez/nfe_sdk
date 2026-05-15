import { CEventoEconfV100LeiauteEventoCancEConfV100Evento } from './CEventoEconfV100LeiauteEventoCancEConfV100Evento';

import { CEventoEconfV100LeiauteEventoCancEConfV100TretEvento } from './CEventoEconfV100LeiauteEventoCancEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEvento } from './TEventoEconfV100LeiauteEventoCancEConfV100VerEvento';

export interface IEventoEconfV100LeiauteEventoCancEConfV100ProcEvento {
  "@class"?: string;
  evento?: CEventoEconfV100LeiauteEventoCancEConfV100Evento;
  retEvento?: CEventoEconfV100LeiauteEventoCancEConfV100TretEvento;
  $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEvento;
}

export class CEventoEconfV100LeiauteEventoCancEConfV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoEconfV100LeiauteEventoCancEConfV100Evento;
    public retEvento?: CEventoEconfV100LeiauteEventoCancEConfV100TretEvento;
    public $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEvento;

    public constructor(props?: CEventoEconfV100LeiauteEventoCancEConfV100ProcEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoCancEConfV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEconfV100LeiauteEventoCancEConfV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoEconfV100LeiauteEventoCancEConfV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
