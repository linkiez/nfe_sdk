import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventosRtcE112120V100GConsumo } from './CEventosRtcE112120V100GConsumo';

/**
 * Informações do Evento de Importação em ALC/ZFM não convertida em isenção
 */
export class CEventosRtcE112120V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.
     */
    public cOrgaoAutor?: unknown;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Informações de itens integrados ao ativo imobilizado
     */
    public gConsumo?: CEventosRtcE112120V100GConsumo;

    /**
     * Creates a new schema-backed CEventosRtcE112120V100DetEvento instance.
     * Schema context: Informações do Evento de Importação em ALC/ZFM não convertida em isenção
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112120V100DetEvento) {
        this["@class"] = ".CEventosRtcE112120V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic"]);
        	this.gConsumo = (props.gConsumo) ? new CEventosRtcE112120V100GConsumo(props.gConsumo): undefined;
        }
    }
}
