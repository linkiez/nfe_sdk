import { TEventoEntregaNFePlV101RetEventoCancEntregaNFeV100RetEnvEvento } from './TEventoEntregaNFePlV101RetEventoCancEntregaNFeV100RetEnvEvento';

export interface IEventoEntregaNFePlV101RetEventoCancEntregaNFeV100 {
  "@class"?: string;
  retEnvEvento?: TEventoEntregaNFePlV101RetEventoCancEntregaNFeV100RetEnvEvento;
}

export class CEventoEntregaNFePlV101RetEventoCancEntregaNFeV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoEntregaNFePlV101RetEventoCancEntregaNFeV100RetEnvEvento;

    public constructor(props?: CEventoEntregaNFePlV101RetEventoCancEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101RetEventoCancEntregaNFeV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
