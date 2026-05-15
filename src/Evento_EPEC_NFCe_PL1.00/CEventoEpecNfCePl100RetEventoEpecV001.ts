import { CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento } from './CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento';

export interface IEventoEpecNfCePl100RetEventoEpecV001 {
  "@class"?: string;
  retEnvEvento?: CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento;
}

export class CEventoEpecNfCePl100RetEventoEpecV001 {
    public "@class"?: string;

    public retEnvEvento?: CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento;

    public constructor(props?: CEventoEpecNfCePl100RetEventoEpecV001) {
        this["@class"] = ".CEventoEpecNfCePl100RetEventoEpecV001";


        if (props) {

        	this.retEnvEvento = (props.retEnvEvento) ? new CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento(props.retEnvEvento): undefined;
        }
    }
}
