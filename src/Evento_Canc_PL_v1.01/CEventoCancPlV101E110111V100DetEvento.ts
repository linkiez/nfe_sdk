export interface IEventoCancPlV101E110111V100DetEvento {
  "@class"?: string;
  nProt?: unknown;
  xJust?: unknown;
}

export class CEventoCancPlV101E110111V100DetEvento {
    public "@class"?: string;

    public nProt?: unknown;
    public xJust?: unknown;

    public constructor(props?: CEventoCancPlV101E110111V100DetEvento) {
        this["@class"] = ".CEventoCancPlV101E110111V100DetEvento";


        if (props) {

        	this.nProt = props.nProt;
        	this.xJust = props.xJust;
        }
    }
}
