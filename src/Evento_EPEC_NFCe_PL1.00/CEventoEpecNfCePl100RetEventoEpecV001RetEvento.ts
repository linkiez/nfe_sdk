import { CEventoEpecNfCePl100RetEventoEpecV001InfEvento } from './CEventoEpecNfCePl100RetEventoEpecV001InfEvento';

export interface IEventoEpecNfCePl100RetEventoEpecV001RetEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoEpecNfCePl100RetEventoEpecV001InfEvento;
}

export class CEventoEpecNfCePl100RetEventoEpecV001RetEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoEpecNfCePl100RetEventoEpecV001InfEvento;

    public constructor(props?: CEventoEpecNfCePl100RetEventoEpecV001RetEvento) {
        this["@class"] = ".CEventoEpecNfCePl100RetEventoEpecV001RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEpecNfCePl100RetEventoEpecV001InfEvento(props.infEvento): undefined;
        }
    }
}
