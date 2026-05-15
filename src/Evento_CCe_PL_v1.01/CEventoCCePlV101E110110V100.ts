import { CEventoCCePlV101E110110V100DetEvento } from './CEventoCCePlV101E110110V100DetEvento';

export interface IEventoCCePlV101E110110V100 {
  "@class"?: string;
  detEvento?: CEventoCCePlV101E110110V100DetEvento;
}

export class CEventoCCePlV101E110110V100 {
    public "@class"?: string;

    public detEvento?: CEventoCCePlV101E110110V100DetEvento;

    public constructor(props?: CEventoCCePlV101E110110V100) {
        this["@class"] = ".CEventoCCePlV101E110110V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoCCePlV101E110110V100DetEvento(props.detEvento): undefined;
        }
    }
}
