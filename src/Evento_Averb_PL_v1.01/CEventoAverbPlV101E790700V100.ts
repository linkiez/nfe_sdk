import { CEventoAverbPlV101E790700V100DetEvento } from './CEventoAverbPlV101E790700V100DetEvento';

export interface IEventoAverbPlV101E790700V100 {
  "@class"?: string;
  detEvento?: CEventoAverbPlV101E790700V100DetEvento;
}

export class CEventoAverbPlV101E790700V100 {
    public "@class"?: string;

    public detEvento?: CEventoAverbPlV101E790700V100DetEvento;

    public constructor(props?: CEventoAverbPlV101E790700V100) {
        this["@class"] = ".CEventoAverbPlV101E790700V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoAverbPlV101E790700V100DetEvento(props.detEvento): undefined;
        }
    }
}
