import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento';

import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento } from './TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento';

export interface IEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100ProcEvento {
  "@class"?: string;
  evento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento;
  retEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento;
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento;
}

export class CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento;
    public retEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento;
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento;

    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100ProcEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
