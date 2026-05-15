import { CEventoGenericoPlV101LeiauteEventoV100Evento } from './CEventoGenericoPlV101LeiauteEventoV100Evento';

import { TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento } from './TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento';

export interface IEventoGenericoPlV101LeiauteEventoV100EnvEvento {
  "@class"?: string;
  evento?: CEventoGenericoPlV101LeiauteEventoV100Evento;
  $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento;
}

export class CEventoGenericoPlV101LeiauteEventoV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoGenericoPlV101LeiauteEventoV100Evento;
    public $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento;

    public constructor(props?: CEventoGenericoPlV101LeiauteEventoV100EnvEvento) {
        this["@class"] = ".CEventoGenericoPlV101LeiauteEventoV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoGenericoPlV101LeiauteEventoV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
