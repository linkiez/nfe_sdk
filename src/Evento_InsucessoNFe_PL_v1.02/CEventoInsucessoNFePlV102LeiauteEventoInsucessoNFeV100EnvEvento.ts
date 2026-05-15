import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento } from './TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento';

export interface IEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100EnvEvento {
  "@class"?: string;
  evento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento;
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento;
}

export class CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento;
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento;

    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100EnvEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
