import { TEventoManifestaDestPlV101ConfRecebtoV100Evento } from './TEventoManifestaDestPlV101ConfRecebtoV100Evento';

export interface IEventoManifestaDestPlV101ConfRecebtoV100 {
  "@class"?: string;
  evento?: TEventoManifestaDestPlV101ConfRecebtoV100Evento;
}

export class CEventoManifestaDestPlV101ConfRecebtoV100 {
    public "@class"?: string;

    public evento?: TEventoManifestaDestPlV101ConfRecebtoV100Evento;

    public constructor(props?: CEventoManifestaDestPlV101ConfRecebtoV100) {
        this["@class"] = ".CEventoManifestaDestPlV101ConfRecebtoV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
