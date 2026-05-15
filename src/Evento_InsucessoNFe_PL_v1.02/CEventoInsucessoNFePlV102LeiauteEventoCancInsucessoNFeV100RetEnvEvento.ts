import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento } from './CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento } from './TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento';

export interface IEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento;
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento;
}

export class CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento;
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento;

    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100RetEnvEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
