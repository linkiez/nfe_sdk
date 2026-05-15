import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento';

import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento } from './TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento';

export interface IEventoManifestaDestPlV101LeiauteConfRecebtoV100ProcEvento {
  "@class"?: string;
  evento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento;
  retEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento;
  $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento;
}

export class CEventoManifestaDestPlV101LeiauteConfRecebtoV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento;
    public retEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento;
    public $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento;

    public constructor(props?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100ProcEvento) {
        this["@class"] = ".CEventoManifestaDestPlV101LeiauteConfRecebtoV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
