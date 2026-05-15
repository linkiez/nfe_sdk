import { CEventoEpecNfCePl100EventoEpecV001EnvEvento } from './CEventoEpecNfCePl100EventoEpecV001EnvEvento';

export interface IEventoEpecNfCePl100EventoEpecV001 {
  "@class"?: string;
  envEvento?: CEventoEpecNfCePl100EventoEpecV001EnvEvento;
}

export class CEventoEpecNfCePl100EventoEpecV001 {
    public "@class"?: string;

    public envEvento?: CEventoEpecNfCePl100EventoEpecV001EnvEvento;

    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001";


        if (props) {

        	this.envEvento = (props.envEvento) ? new CEventoEpecNfCePl100EventoEpecV001EnvEvento(props.envEvento): undefined;
        }
    }
}
