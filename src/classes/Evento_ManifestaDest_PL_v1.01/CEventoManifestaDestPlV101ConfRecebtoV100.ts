import { TEventoManifestaDestPlV101ConfRecebtoV100Evento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101ConfRecebtoV100Evento';

/**
 * Runtime class for CEventoManifestaDestPlV101ConfRecebtoV100.
 */
export class CEventoManifestaDestPlV101ConfRecebtoV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoManifestaDestPlV101ConfRecebtoV100Evento;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101ConfRecebtoV100 instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101ConfRecebtoV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101ConfRecebtoV100) {
        this["@class"] = ".CEventoManifestaDestPlV101ConfRecebtoV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
