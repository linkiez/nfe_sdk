import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoAverbPlV101E790700V100ItensAverbados } from './CEventoAverbPlV101E790700V100ItensAverbados';

/**
 * Schema XML de validação do evento de averbação da NFe (e790700)
 */
export class CEventoAverbPlV101E790700V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Versão do aplicativo do autor do evento
     */
    public verAplic?: unknown;
    /**
     * Informações dos itens da NF-e do evento.
     */
    public itensAverbados?: CEventoAverbPlV101E790700V100ItensAverbados;

    /**
     * Creates a new schema-backed CEventoAverbPlV101E790700V100DetEvento instance.
     * Schema context: Schema XML de validação do evento de averbação da NFe (e790700)
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101E790700V100DetEvento) {
        this["@class"] = ".CEventoAverbPlV101E790700V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["verAplic"]);
        	this.itensAverbados = (props.itensAverbados) ? new CEventoAverbPlV101E790700V100ItensAverbados(props.itensAverbados): undefined;
        }
    }
}
