import { CEventoAverbPlV101E790700V100ItensAverbados } from './CEventoAverbPlV101E790700V100ItensAverbados';

export interface IEventoAverbPlV101E790700V100DetEvento {
  "@class"?: string;
  verAplic?: unknown;
  itensAverbados?: CEventoAverbPlV101E790700V100ItensAverbados;
}

export class CEventoAverbPlV101E790700V100DetEvento {
    public "@class"?: string;

    public verAplic?: unknown;
    public itensAverbados?: CEventoAverbPlV101E790700V100ItensAverbados;

    public constructor(props?: CEventoAverbPlV101E790700V100DetEvento) {
        this["@class"] = ".CEventoAverbPlV101E790700V100DetEvento";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.itensAverbados = (props.itensAverbados) ? new CEventoAverbPlV101E790700V100ItensAverbados(props.itensAverbados): undefined;
        }
    }
}
