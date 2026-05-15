import { CEventoCancPlV101LeiauteEventoCancNFeV100Evento } from './CEventoCancPlV101LeiauteEventoCancNFeV100Evento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento } from './TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento';

export interface IEventoCancPlV101LeiauteEventoCancNFeV100EnvEvento {
  "@class"?: string;
  evento?: CEventoCancPlV101LeiauteEventoCancNFeV100Evento;
  $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;
}

export class CEventoCancPlV101LeiauteEventoCancNFeV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoCancPlV101LeiauteEventoCancNFeV100Evento;
    public $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;

    public constructor(props?: CEventoCancPlV101LeiauteEventoCancNFeV100EnvEvento) {
        this["@class"] = ".CEventoCancPlV101LeiauteEventoCancNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCancPlV101LeiauteEventoCancNFeV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
