import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100EnvEvento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
