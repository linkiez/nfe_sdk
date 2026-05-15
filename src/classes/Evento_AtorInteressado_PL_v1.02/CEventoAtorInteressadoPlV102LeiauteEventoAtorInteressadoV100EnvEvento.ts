import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100EnvEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
