import { CEventoSuframaInternalizaPlV101E990910V100DetEvento } from './CEventoSuframaInternalizaPlV101E990910V100DetEvento';

export interface IEventoSuframaInternalizaPlV101E990910V100 {
  "@class"?: string;
  detEvento?: CEventoSuframaInternalizaPlV101E990910V100DetEvento;
}

export class CEventoSuframaInternalizaPlV101E990910V100 {
    public "@class"?: string;

    public detEvento?: CEventoSuframaInternalizaPlV101E990910V100DetEvento;

    public constructor(props?: CEventoSuframaInternalizaPlV101E990910V100) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101E990910V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoSuframaInternalizaPlV101E990910V100DetEvento(props.detEvento): undefined;
        }
    }
}
