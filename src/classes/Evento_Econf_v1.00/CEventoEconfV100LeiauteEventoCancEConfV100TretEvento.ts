import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEconfV100LeiauteEventoCancEConfV100InfEvento } from './CEventoEconfV100LeiauteEventoCancEConfV100InfEvento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoCancEConfV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export class CEventoEconfV100LeiauteEventoCancEConfV100TretEvento {
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
     * Creates a new schema-backed CEventoEconfV100LeiauteEventoCancEConfV100TretEvento instance.
     * Schema context: Tipo retorno do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100LeiauteEventoCancEConfV100TretEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoCancEConfV100TretEvento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CEventoEconfV100LeiauteEventoCancEConfV100InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
