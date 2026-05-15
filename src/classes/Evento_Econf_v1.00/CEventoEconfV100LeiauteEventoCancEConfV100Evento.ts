import { CEventoEconfV100LeiauteEventoCancEConfV100InfEvento } from './CEventoEconfV100LeiauteEventoCancEConfV100InfEvento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoCancEConfV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoEconfV100LeiauteEventoCancEConfV100Evento {
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
    public infEvento?: CEventoEconfV100LeiauteEventoCancEConfV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100LeiauteEventoCancEConfV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100LeiauteEventoCancEConfV100Evento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoCancEConfV100Evento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEconfV100LeiauteEventoCancEConfV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
