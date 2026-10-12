import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações do Evento de Atualização da Data de Previsão de Entrega
 */
export class CEventosRtcE112150V100DetEvento {
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
     * Data da previsão de entrega ou disponibilização do bem.
     */
    public dPrevEntrega?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE112150V100DetEvento instance.
     * Schema context: Informações do Evento de Atualização da Data de Previsão de Entrega
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112150V100DetEvento) {
        this["@class"] = ".CEventosRtcE112150V100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic", "dPrevEntrega"]);
        }
    }
}
