import { CEventoEconfV100LeiauteEventoEConfV100InfEvento } from './CEventoEconfV100LeiauteEventoEConfV100InfEvento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoEConfV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoEconfV100LeiauteEventoEConfV100Evento {
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
    public infEvento?: CEventoEconfV100LeiauteEventoEConfV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100LeiauteEventoEConfV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100LeiauteEventoEConfV100Evento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoEConfV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEconfV100LeiauteEventoEConfV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
