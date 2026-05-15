import { CEventoAverbPlV101LeiauteAverbV100InfEvento } from './CEventoAverbPlV101LeiauteAverbV100InfEvento';

import { TEventoAverbPlV101LeiauteAverbV100VerEvento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101LeiauteAverbV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoAverbPlV101LeiauteAverbV100Evento {
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
    public infEvento?: CEventoAverbPlV101LeiauteAverbV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoAverbPlV101LeiauteAverbV100VerEvento;

    /**
     * Creates a new schema-backed CEventoAverbPlV101LeiauteAverbV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100Evento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoAverbPlV101LeiauteAverbV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
