import { CEventoSuframaVistoriaPlV101E990900V100DetEvento } from './CEventoSuframaVistoriaPlV101E990900V100DetEvento';

export interface IEventoSuframaVistoriaPlV101E990900V100 {
  "@class"?: string;
  detEvento?: CEventoSuframaVistoriaPlV101E990900V100DetEvento;
}

export class CEventoSuframaVistoriaPlV101E990900V100 {
    public "@class"?: string;

    public detEvento?: CEventoSuframaVistoriaPlV101E990900V100DetEvento;

    public constructor(props?: CEventoSuframaVistoriaPlV101E990900V100) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101E990900V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoSuframaVistoriaPlV101E990900V100DetEvento(props.detEvento): undefined;
        }
    }
}
