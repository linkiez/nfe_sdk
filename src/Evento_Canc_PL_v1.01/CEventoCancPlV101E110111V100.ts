import { CEventoCancPlV101E110111V100DetEvento } from './CEventoCancPlV101E110111V100DetEvento';

export interface IEventoCancPlV101E110111V100 {
  "@class"?: string;
  detEvento?: CEventoCancPlV101E110111V100DetEvento;
}

export class CEventoCancPlV101E110111V100 {
    public "@class"?: string;

    public detEvento?: CEventoCancPlV101E110111V100DetEvento;

    public constructor(props?: CEventoCancPlV101E110111V100) {
        this["@class"] = ".CEventoCancPlV101E110111V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoCancPlV101E110111V100DetEvento(props.detEvento): undefined;
        }
    }
}
