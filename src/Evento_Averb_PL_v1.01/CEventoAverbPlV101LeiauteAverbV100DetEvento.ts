import { CEventoAverbPlV101LeiauteAverbV100ItensAverbados } from './CEventoAverbPlV101LeiauteAverbV100ItensAverbados';

export interface IEventoAverbPlV101LeiauteAverbV100DetEvento {
  "@class"?: string;
  verAplic?: unknown;
  itensAverbados?: CEventoAverbPlV101LeiauteAverbV100ItensAverbados;
}

export class CEventoAverbPlV101LeiauteAverbV100DetEvento {
    public "@class"?: string;

    public verAplic?: unknown;
    public itensAverbados?: CEventoAverbPlV101LeiauteAverbV100ItensAverbados;

    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100DetEvento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100DetEvento";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.itensAverbados = (props.itensAverbados) ? new CEventoAverbPlV101LeiauteAverbV100ItensAverbados(props.itensAverbados): undefined;
        }
    }
}
