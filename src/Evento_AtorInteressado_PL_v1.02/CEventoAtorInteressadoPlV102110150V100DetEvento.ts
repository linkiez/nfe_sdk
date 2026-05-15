export interface IEventoAtorInteressadoPlV102110150V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
}

export class CEventoAtorInteressadoPlV102110150V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;

    public constructor(props?: CEventoAtorInteressadoPlV102110150V100DetEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102110150V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        }
    }
}
