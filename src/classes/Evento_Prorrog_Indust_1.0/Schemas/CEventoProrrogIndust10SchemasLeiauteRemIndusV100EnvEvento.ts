import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoProrrogIndust10SchemasLeiauteRemIndusV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasLeiauteRemIndusV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100EnvEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasLeiauteRemIndusV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento(props.evento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
