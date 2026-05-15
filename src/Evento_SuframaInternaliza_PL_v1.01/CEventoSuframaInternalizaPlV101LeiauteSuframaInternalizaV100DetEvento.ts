export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento {
  "@class"?: string;
  dVistoria?: unknown;
}

export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento {
    public "@class"?: string;

    public dVistoria?: unknown;

    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento";


        if (props) {

        	this.dVistoria = props.dVistoria;
        }
    }
}
