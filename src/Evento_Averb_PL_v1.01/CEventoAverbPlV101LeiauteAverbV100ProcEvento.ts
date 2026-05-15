import { CEventoAverbPlV101LeiauteAverbV100Evento } from './CEventoAverbPlV101LeiauteAverbV100Evento';

import { CEventoAverbPlV101LeiauteAverbV100TretEvento } from './CEventoAverbPlV101LeiauteAverbV100TretEvento';

import { TEventoAverbPlV101LeiauteAverbV100VerEvento } from './TEventoAverbPlV101LeiauteAverbV100VerEvento';

export interface IEventoAverbPlV101LeiauteAverbV100ProcEvento {
  "@class"?: string;
  evento?: CEventoAverbPlV101LeiauteAverbV100Evento;
  retEvento?: CEventoAverbPlV101LeiauteAverbV100TretEvento;
  $versao?: TEventoAverbPlV101LeiauteAverbV100VerEvento;
}

export class CEventoAverbPlV101LeiauteAverbV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoAverbPlV101LeiauteAverbV100Evento;
    public retEvento?: CEventoAverbPlV101LeiauteAverbV100TretEvento;
    public $versao?: TEventoAverbPlV101LeiauteAverbV100VerEvento;

    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100ProcEvento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoAverbPlV101LeiauteAverbV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoAverbPlV101LeiauteAverbV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
