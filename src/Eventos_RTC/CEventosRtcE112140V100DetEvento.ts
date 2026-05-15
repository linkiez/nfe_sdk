import { CEventosRtcE112140V100GItemNaoFornecido } from './CEventosRtcE112140V100GItemNaoFornecido';

export interface IEventosRtcE112140V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  gItemNaoFornecido?: CEventosRtcE112140V100GItemNaoFornecido;
}

export class CEventosRtcE112140V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public gItemNaoFornecido?: CEventosRtcE112140V100GItemNaoFornecido;

    public constructor(props?: CEventosRtcE112140V100DetEvento) {
        this["@class"] = ".CEventosRtcE112140V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.gItemNaoFornecido = (props.gItemNaoFornecido) ? new CEventosRtcE112140V100GItemNaoFornecido(props.gItemNaoFornecido): undefined;
        }
    }
}
