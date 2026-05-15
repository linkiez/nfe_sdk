export interface IEventoEconfV100E110751V100DetEvento {
  "@class"?: string;
  verAplic?: unknown;
  nProtEvento?: unknown;
}

export class CEventoEconfV100E110751V100DetEvento {
    public "@class"?: string;

    public verAplic?: unknown;
    public nProtEvento?: unknown;

    public constructor(props?: CEventoEconfV100E110751V100DetEvento) {
        this["@class"] = ".CEventoEconfV100E110751V100DetEvento";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.nProtEvento = props.nProtEvento;
        }
    }
}
