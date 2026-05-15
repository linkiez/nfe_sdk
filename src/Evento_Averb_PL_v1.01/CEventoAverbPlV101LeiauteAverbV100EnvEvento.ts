import { CEventoAverbPlV101LeiauteAverbV100Evento } from './CEventoAverbPlV101LeiauteAverbV100Evento';

import { TEventoAverbPlV101LeiauteAverbV100VerEnvEvento } from './TEventoAverbPlV101LeiauteAverbV100VerEnvEvento';

export interface IEventoAverbPlV101LeiauteAverbV100EnvEvento {
  "@class"?: string;
  evento?: CEventoAverbPlV101LeiauteAverbV100Evento;
  $versao?: TEventoAverbPlV101LeiauteAverbV100VerEnvEvento;
}

export class CEventoAverbPlV101LeiauteAverbV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoAverbPlV101LeiauteAverbV100Evento;
    public $versao?: TEventoAverbPlV101LeiauteAverbV100VerEnvEvento;

    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100EnvEvento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoAverbPlV101LeiauteAverbV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
