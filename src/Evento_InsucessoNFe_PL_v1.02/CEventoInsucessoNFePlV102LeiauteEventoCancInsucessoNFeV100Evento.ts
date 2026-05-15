import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento } from './CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento } from './TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento';

export interface IEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento;
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento;
}

export class CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento;
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento;

    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
