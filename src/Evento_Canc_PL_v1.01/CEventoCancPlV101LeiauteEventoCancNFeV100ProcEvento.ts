import { CEventoCancPlV101LeiauteEventoCancNFeV100Evento } from './CEventoCancPlV101LeiauteEventoCancNFeV100Evento';

import { CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento } from './CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento } from './TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento';

export interface IEventoCancPlV101LeiauteEventoCancNFeV100ProcEvento {
  "@class"?: string;
  evento?: CEventoCancPlV101LeiauteEventoCancNFeV100Evento;
  retEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
  $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento;
}

export class CEventoCancPlV101LeiauteEventoCancNFeV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoCancPlV101LeiauteEventoCancNFeV100Evento;
    public retEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
    public $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento;

    public constructor(props?: CEventoCancPlV101LeiauteEventoCancNFeV100ProcEvento) {
        this["@class"] = ".CEventoCancPlV101LeiauteEventoCancNFeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCancPlV101LeiauteEventoCancNFeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
