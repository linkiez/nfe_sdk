import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento } from './CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento } from './TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento';

export interface IEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100EnvEvento {
  "@class"?: string;
  evento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento;
  $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento;
}

export class CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento;
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento;

    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100EnvEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
