import { CEventoCCePlV101LeiauteCCeV100TretEvento } from './CEventoCCePlV101LeiauteCCeV100TretEvento';

import { TEventoCCePlV101LeiauteCCeV100COrgaoIbge } from './TEventoCCePlV101LeiauteCCeV100COrgaoIbge';

import { TEventoCCePlV101LeiauteCCeV100VerEnvEvento } from './TEventoCCePlV101LeiauteCCeV100VerEnvEvento';

export interface IEventoCCePlV101LeiauteCCeV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: TEventoCCePlV101LeiauteCCeV100COrgaoIbge;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoCCePlV101LeiauteCCeV100TretEvento;
  $versao?: TEventoCCePlV101LeiauteCCeV100VerEnvEvento;
}

export class CEventoCCePlV101LeiauteCCeV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: TEventoCCePlV101LeiauteCCeV100COrgaoIbge;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoCCePlV101LeiauteCCeV100TretEvento;
    public $versao?: TEventoCCePlV101LeiauteCCeV100VerEnvEvento;

    public constructor(props?: CEventoCCePlV101LeiauteCCeV100RetEnvEvento) {
        this["@class"] = ".CEventoCCePlV101LeiauteCCeV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoCCePlV101LeiauteCCeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
