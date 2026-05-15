import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento } from './TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento';

export interface IEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento;
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento;
}

export class CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento;
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento;

    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
