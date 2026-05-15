import { CEventosRtcE211130V100GImobilizacao } from './CEventosRtcE211130V100GImobilizacao';

export interface IEventosRtcE211130V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  gImobilizacao?: CEventosRtcE211130V100GImobilizacao;
}

export class CEventosRtcE211130V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public gImobilizacao?: CEventosRtcE211130V100GImobilizacao;

    public constructor(props?: CEventosRtcE211130V100DetEvento) {
        this["@class"] = ".CEventosRtcE211130V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gImobilizacao = (props.gImobilizacao) ? new CEventosRtcE211130V100GImobilizacao(props.gImobilizacao): undefined;
        }
    }
}
