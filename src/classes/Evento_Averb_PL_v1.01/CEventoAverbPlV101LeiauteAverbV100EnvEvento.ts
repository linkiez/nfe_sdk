import { CEventoAverbPlV101LeiauteAverbV100Evento } from './CEventoAverbPlV101LeiauteAverbV100Evento';

import { TEventoAverbPlV101LeiauteAverbV100VerEnvEvento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101LeiauteAverbV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoAverbPlV101LeiauteAverbV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoAverbPlV101LeiauteAverbV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoAverbPlV101LeiauteAverbV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoAverbPlV101LeiauteAverbV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100EnvEvento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoAverbPlV101LeiauteAverbV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
