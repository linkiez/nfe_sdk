import { CEventoGenericoPlV101LeiauteEventoV100Evento } from './CEventoGenericoPlV101LeiauteEventoV100Evento';

import { CEventoGenericoPlV101LeiauteEventoV100RetEvento } from './CEventoGenericoPlV101LeiauteEventoV100RetEvento';

import { TEventoGenericoPlV101LeiauteEventoV100VerEvento } from './TEventoGenericoPlV101LeiauteEventoV100VerEvento';

export interface IEventoGenericoPlV101LeiauteEventoV100ProcEvento {
  "@class"?: string;
  evento?: CEventoGenericoPlV101LeiauteEventoV100Evento;
  retEvento?: CEventoGenericoPlV101LeiauteEventoV100RetEvento;
  $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEvento;
}

export class CEventoGenericoPlV101LeiauteEventoV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoGenericoPlV101LeiauteEventoV100Evento;
    public retEvento?: CEventoGenericoPlV101LeiauteEventoV100RetEvento;
    public $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEvento;

    public constructor(props?: CEventoGenericoPlV101LeiauteEventoV100ProcEvento) {
        this["@class"] = ".CEventoGenericoPlV101LeiauteEventoV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoGenericoPlV101LeiauteEventoV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoGenericoPlV101LeiauteEventoV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
