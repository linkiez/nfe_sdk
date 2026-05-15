import { CEventoEconfV100LeiauteEventoEConfV100Evento } from './CEventoEconfV100LeiauteEventoEConfV100Evento';

import { CEventoEconfV100LeiauteEventoEConfV100TretEvento } from './CEventoEconfV100LeiauteEventoEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEvento } from './TEventoEconfV100LeiauteEventoEConfV100VerEvento';

export interface IEventoEconfV100LeiauteEventoEConfV100ProcEvento {
  "@class"?: string;
  evento?: CEventoEconfV100LeiauteEventoEConfV100Evento;
  retEvento?: CEventoEconfV100LeiauteEventoEConfV100TretEvento;
  $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEvento;
}

export class CEventoEconfV100LeiauteEventoEConfV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoEconfV100LeiauteEventoEConfV100Evento;
    public retEvento?: CEventoEconfV100LeiauteEventoEConfV100TretEvento;
    public $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEvento;

    public constructor(props?: CEventoEconfV100LeiauteEventoEConfV100ProcEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoEConfV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEconfV100LeiauteEventoEConfV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoEconfV100LeiauteEventoEConfV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
