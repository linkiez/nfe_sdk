import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento } from './CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento {
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
    public infEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento instance.
     * Schema context: Tipo retorno do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
