import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoManifestaDestPlV101LeiauteConfRecebtoV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101LeiauteConfRecebtoV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100EnvEvento) {
        this["@class"] = ".CEventoManifestaDestPlV101LeiauteConfRecebtoV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento(props.evento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
