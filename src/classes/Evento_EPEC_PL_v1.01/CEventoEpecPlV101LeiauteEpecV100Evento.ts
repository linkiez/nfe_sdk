import { CEventoEpecPlV101LeiauteEpecV100InfEvento } from './CEventoEpecPlV101LeiauteEpecV100InfEvento';

import { TEventoEpecPlV101LeiauteEpecV100VerEvento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoEpecPlV101LeiauteEpecV100Evento {
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
    public infEvento?: CEventoEpecPlV101LeiauteEpecV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoEpecPlV101LeiauteEpecV100VerEvento;

    /**
     * Creates a new schema-backed CEventoEpecPlV101LeiauteEpecV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100Evento) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEpecPlV101LeiauteEpecV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
