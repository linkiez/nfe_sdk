import { TEventoEntregaNFePlV101EventoCancEntregaNFeV100Evento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101EventoCancEntregaNFeV100Evento';

/**
 * Runtime class for CEventoEntregaNFePlV101EventoCancEntregaNFeV100.
 */
export class CEventoEntregaNFePlV101EventoCancEntregaNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoEntregaNFePlV101EventoCancEntregaNFeV100Evento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101EventoCancEntregaNFeV100 instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101EventoCancEntregaNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101EventoCancEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101EventoCancEntregaNFeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
