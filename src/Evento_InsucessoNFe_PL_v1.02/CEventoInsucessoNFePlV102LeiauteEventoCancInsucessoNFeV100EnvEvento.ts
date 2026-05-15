import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento } from './CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento';

import { TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento } from './TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento';

export interface IEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100EnvEvento {
  "@class"?: string;
  evento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento;
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento;
}

export class CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento;
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento;

    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100EnvEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
