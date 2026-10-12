import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Schema XML de validação do evento de Ator Interessado na NF-e - Transportador (110150)”
 */
export class CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property c Orgao Autor.
     */
    public cOrgaoAutor?: unknown;
    /**
     * Versão do aplicativo do Autor do Evento.
     */
    public verAplic?: unknown;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento instance.
     * Schema context: Schema XML de validação do evento de Ator Interessado na NF-e - Transportador (110150)”
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic"]);
        }
    }
}
