import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento } from './CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public infEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
