import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento } from './CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento';

import { TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento } from './TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento';

export interface IEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100EnvEvento {
  "@class"?: string;
  evento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento;
  $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento;
}

export class CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento;
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento;

    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100EnvEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
