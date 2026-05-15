import { TEventoProrrogIndust10SchemasEventoRemIndusV100Evento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasEventoRemIndusV100Evento';

/**
 * Runtime class for CEventoProrrogIndust10SchemasEventoRemIndusV100.
 */
export class CEventoProrrogIndust10SchemasEventoRemIndusV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoProrrogIndust10SchemasEventoRemIndusV100Evento;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasEventoRemIndusV100 instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasEventoRemIndusV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasEventoRemIndusV100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasEventoRemIndusV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
