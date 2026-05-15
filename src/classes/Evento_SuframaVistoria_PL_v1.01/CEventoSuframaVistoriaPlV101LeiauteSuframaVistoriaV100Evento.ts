import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento } from './CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento {
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
    public infEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
