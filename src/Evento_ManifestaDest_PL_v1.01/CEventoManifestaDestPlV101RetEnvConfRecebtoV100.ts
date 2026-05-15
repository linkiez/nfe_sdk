import { TEventoManifestaDestPlV101RetEnvConfRecebtoV100RetEnvEvento } from './TEventoManifestaDestPlV101RetEnvConfRecebtoV100RetEnvEvento';

export interface IEventoManifestaDestPlV101RetEnvConfRecebtoV100 {
  "@class"?: string;
  retEnvEvento?: TEventoManifestaDestPlV101RetEnvConfRecebtoV100RetEnvEvento;
}

export class CEventoManifestaDestPlV101RetEnvConfRecebtoV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoManifestaDestPlV101RetEnvConfRecebtoV100RetEnvEvento;

    public constructor(props?: CEventoManifestaDestPlV101RetEnvConfRecebtoV100) {
        this["@class"] = ".CEventoManifestaDestPlV101RetEnvConfRecebtoV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
