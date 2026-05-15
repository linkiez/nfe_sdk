import { CEventoManifestaDestPlV101E210210V100DetEvento } from './CEventoManifestaDestPlV101E210210V100DetEvento';

export interface IEventoManifestaDestPlV101E210210V100 {
  "@class"?: string;
  detEvento?: CEventoManifestaDestPlV101E210210V100DetEvento;
}

export class CEventoManifestaDestPlV101E210210V100 {
    public "@class"?: string;

    public detEvento?: CEventoManifestaDestPlV101E210210V100DetEvento;

    public constructor(props?: CEventoManifestaDestPlV101E210210V100) {
        this["@class"] = ".CEventoManifestaDestPlV101E210210V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoManifestaDestPlV101E210210V100DetEvento(props.detEvento): undefined;
        }
    }
}
