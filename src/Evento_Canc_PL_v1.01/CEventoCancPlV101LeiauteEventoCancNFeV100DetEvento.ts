export interface IEventoCancPlV101LeiauteEventoCancNFeV100DetEvento {
  "@class"?: string;
  nProt?: unknown;
  xJust?: unknown;
}

export class CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento {
    public "@class"?: string;

    public nProt?: unknown;
    public xJust?: unknown;

    public constructor(props?: CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento) {
        this["@class"] = ".CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento";


        if (props) {

        	this.nProt = props.nProt;
        	this.xJust = props.xJust;
        }
    }
}
