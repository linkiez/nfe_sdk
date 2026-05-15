import { TEventoManifestaDestPlV101EnvConfRecebtoV100EnvEvento } from './TEventoManifestaDestPlV101EnvConfRecebtoV100EnvEvento';

export interface IEventoManifestaDestPlV101EnvConfRecebtoV100 {
  "@class"?: string;
  envEvento?: TEventoManifestaDestPlV101EnvConfRecebtoV100EnvEvento;
}

export class CEventoManifestaDestPlV101EnvConfRecebtoV100 {
    public "@class"?: string;

    public envEvento?: TEventoManifestaDestPlV101EnvConfRecebtoV100EnvEvento;

    public constructor(props?: CEventoManifestaDestPlV101EnvConfRecebtoV100) {
        this["@class"] = ".CEventoManifestaDestPlV101EnvConfRecebtoV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
