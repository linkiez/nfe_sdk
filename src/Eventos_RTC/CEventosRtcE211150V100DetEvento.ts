import { CEventosRtcE211150V100GCredito } from './CEventosRtcE211150V100GCredito';

export interface IEventosRtcE211150V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  gCredito?: CEventosRtcE211150V100GCredito;
}

export class CEventosRtcE211150V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public gCredito?: CEventosRtcE211150V100GCredito;

    public constructor(props?: CEventosRtcE211150V100DetEvento) {
        this["@class"] = ".CEventosRtcE211150V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gCredito = (props.gCredito) ? new CEventosRtcE211150V100GCredito(props.gCredito): undefined;
        }
    }
}
