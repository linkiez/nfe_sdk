import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge } from './TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento } from './TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento';

export interface IEventoManifestaDestPlV101LeiauteConfRecebtoV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento;
  $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;
}

export class CEventoManifestaDestPlV101LeiauteConfRecebtoV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento;
    public $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;

    public constructor(props?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100RetEnvEvento) {
        this["@class"] = ".CEventoManifestaDestPlV101LeiauteConfRecebtoV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
