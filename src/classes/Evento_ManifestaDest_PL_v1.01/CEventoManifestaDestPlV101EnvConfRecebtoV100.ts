import { TEventoManifestaDestPlV101EnvConfRecebtoV100EnvEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101EnvConfRecebtoV100EnvEvento';

/**
 * Runtime class for CEventoManifestaDestPlV101EnvConfRecebtoV100.
 */
export class CEventoManifestaDestPlV101EnvConfRecebtoV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoManifestaDestPlV101EnvConfRecebtoV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101EnvConfRecebtoV100 instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101EnvConfRecebtoV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101EnvConfRecebtoV100) {
        this["@class"] = ".CEventoManifestaDestPlV101EnvConfRecebtoV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
