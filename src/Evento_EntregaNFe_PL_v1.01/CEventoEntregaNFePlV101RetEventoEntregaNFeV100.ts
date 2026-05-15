import { TEventoEntregaNFePlV101RetEventoEntregaNFeV100RetEnvEvento } from './TEventoEntregaNFePlV101RetEventoEntregaNFeV100RetEnvEvento';

export interface IEventoEntregaNFePlV101RetEventoEntregaNFeV100 {
  "@class"?: string;
  retEnvEvento?: TEventoEntregaNFePlV101RetEventoEntregaNFeV100RetEnvEvento;
}

export class CEventoEntregaNFePlV101RetEventoEntregaNFeV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoEntregaNFePlV101RetEventoEntregaNFeV100RetEnvEvento;

    public constructor(props?: CEventoEntregaNFePlV101RetEventoEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101RetEventoEntregaNFeV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
