export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
}

export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;

    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        }
    }
}
