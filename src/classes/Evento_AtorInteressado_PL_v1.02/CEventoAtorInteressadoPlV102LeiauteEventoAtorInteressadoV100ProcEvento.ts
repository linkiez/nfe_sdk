import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento';

import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100ProcEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
