/**
 * Informações do Evento de Aceite de débito na apuração por emissão de nota de crédito
 */
export class CEventosRtcE211128V100DetEvento {
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
     * Creates a new schema-backed CEventosRtcE211128V100DetEvento instance.
     * Schema context: Informações do Evento de Aceite de débito na apuração por emissão de nota de crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211128V100DetEvento) {
        this["@class"] = ".CEventosRtcE211128V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        }
    }
}
