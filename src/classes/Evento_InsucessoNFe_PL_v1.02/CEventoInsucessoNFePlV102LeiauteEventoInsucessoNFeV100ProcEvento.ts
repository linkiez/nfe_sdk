import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento';

import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento } from './CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100ProcEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
