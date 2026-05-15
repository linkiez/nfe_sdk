import { CEventoEpecPlV101LeiauteEpecV100Evento } from './CEventoEpecPlV101LeiauteEpecV100Evento';

import { CEventoEpecPlV101LeiauteEpecV100RetEvento } from './CEventoEpecPlV101LeiauteEpecV100RetEvento';

import { TEventoEpecPlV101LeiauteEpecV100VerEvento } from './TEventoEpecPlV101LeiauteEpecV100VerEvento';

export interface IEventoEpecPlV101LeiauteEpecV100ProcEvento {
  "@class"?: string;
  evento?: CEventoEpecPlV101LeiauteEpecV100Evento;
  retEvento?: CEventoEpecPlV101LeiauteEpecV100RetEvento;
  $versao?: TEventoEpecPlV101LeiauteEpecV100VerEvento;
}

export class CEventoEpecPlV101LeiauteEpecV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoEpecPlV101LeiauteEpecV100Evento;
    public retEvento?: CEventoEpecPlV101LeiauteEpecV100RetEvento;
    public $versao?: TEventoEpecPlV101LeiauteEpecV100VerEvento;

    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100ProcEvento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEpecPlV101LeiauteEpecV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoEpecPlV101LeiauteEpecV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
