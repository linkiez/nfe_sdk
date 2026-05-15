import { TEventoManifestaDestPlV101RetEnvConfRecebtoV100RetEnvEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101RetEnvConfRecebtoV100RetEnvEvento';

/**
 * Runtime class for CEventoManifestaDestPlV101RetEnvConfRecebtoV100.
 */
export class CEventoManifestaDestPlV101RetEnvConfRecebtoV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoManifestaDestPlV101RetEnvConfRecebtoV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101RetEnvConfRecebtoV100 instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101RetEnvConfRecebtoV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101RetEnvConfRecebtoV100) {
        this["@class"] = ".CEventoManifestaDestPlV101RetEnvConfRecebtoV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
