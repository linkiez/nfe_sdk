import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento';

import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoProrrogIndust10SchemasLeiauteRemIndusV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasLeiauteRemIndusV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100ProcEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasLeiauteRemIndusV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
