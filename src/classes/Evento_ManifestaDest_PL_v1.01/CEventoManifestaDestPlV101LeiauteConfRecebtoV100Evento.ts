import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento {
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
    public infEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento) {
        this["@class"] = ".CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
