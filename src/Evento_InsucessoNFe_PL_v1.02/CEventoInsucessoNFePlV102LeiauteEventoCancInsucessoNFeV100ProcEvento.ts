import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento } from './CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento';

import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento } from './CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento } from './TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento';

export interface IEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100ProcEvento {
  "@class"?: string;
  evento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento;
  retEvento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento;
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento;
}

export class CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento;
    public retEvento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento;
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento;

    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100ProcEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
