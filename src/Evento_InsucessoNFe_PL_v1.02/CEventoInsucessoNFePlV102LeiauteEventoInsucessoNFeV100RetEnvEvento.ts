import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento } from './TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento';

export interface IEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento;
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento;
}

export class CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento;
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento;

    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100RetEnvEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
