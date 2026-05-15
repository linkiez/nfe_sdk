import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento';

import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento } from './TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento';

export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100ProcEvento {
  "@class"?: string;
  evento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento;
  retEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento;
  $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento;
}

export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento;
    public retEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento;
    public $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento;

    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100ProcEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
