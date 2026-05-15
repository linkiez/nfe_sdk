export interface IEventoSuframaInternalizaPlV101E990910V100DetEvento {
  "@class"?: string;
  dVistoria?: unknown;
}

export class CEventoSuframaInternalizaPlV101E990910V100DetEvento {
    public "@class"?: string;

    public dVistoria?: unknown;

    public constructor(props?: CEventoSuframaInternalizaPlV101E990910V100DetEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101E990910V100DetEvento";


        if (props) {

        	this.dVistoria = props.dVistoria;
        }
    }
}
