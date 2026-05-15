import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento } from './TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento';

export interface IEventoManifestaDestPlV101LeiauteConfRecebtoV100EnvEvento {
  "@class"?: string;
  evento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento;
  $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;
}

export class CEventoManifestaDestPlV101LeiauteConfRecebtoV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento;
    public $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;

    public constructor(props?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100EnvEvento) {
        this["@class"] = ".CEventoManifestaDestPlV101LeiauteConfRecebtoV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
