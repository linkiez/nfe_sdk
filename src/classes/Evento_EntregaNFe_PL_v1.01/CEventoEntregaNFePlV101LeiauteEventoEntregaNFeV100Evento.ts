import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento } from './CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento';

import { TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento {
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
    public infEvento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
