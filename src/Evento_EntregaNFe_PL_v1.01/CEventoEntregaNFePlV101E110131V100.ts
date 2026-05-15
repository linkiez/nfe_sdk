import { CEventoEntregaNFePlV101E110131V100DetEvento } from './CEventoEntregaNFePlV101E110131V100DetEvento';

export interface IEventoEntregaNFePlV101E110131V100 {
  "@class"?: string;
  detEvento?: CEventoEntregaNFePlV101E110131V100DetEvento;
}

export class CEventoEntregaNFePlV101E110131V100 {
    public "@class"?: string;

    public detEvento?: CEventoEntregaNFePlV101E110131V100DetEvento;

    public constructor(props?: CEventoEntregaNFePlV101E110131V100) {
        this["@class"] = ".CEventoEntregaNFePlV101E110131V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoEntregaNFePlV101E110131V100DetEvento(props.detEvento): undefined;
        }
    }
}
