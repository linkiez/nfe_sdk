import { CEventoEpecNfCePl100RetEventoEpecV001RetEvento } from './CEventoEpecNfCePl100RetEventoEpecV001RetEvento';

import { TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge } from './TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge';

export interface IEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoEpecNfCePl100RetEventoEpecV001RetEvento;
}

export class CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoEpecNfCePl100RetEventoEpecV001RetEvento;

    public constructor(props?: CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento) {
        this["@class"] = ".CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoEpecNfCePl100RetEventoEpecV001RetEvento(props.retEvento): undefined;
        }
    }
}
