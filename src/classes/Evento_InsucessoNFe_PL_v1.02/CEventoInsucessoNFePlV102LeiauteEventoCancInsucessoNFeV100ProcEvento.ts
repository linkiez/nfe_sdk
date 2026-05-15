import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento } from './CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento';

import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento } from './CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100ProcEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
