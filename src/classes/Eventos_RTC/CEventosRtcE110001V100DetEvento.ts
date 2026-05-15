/**
 * Informações do Cancelamento de evento
 */
export class CEventosRtcE110001V100DetEvento {
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
     * Informar o número do Protocolo de Autorização do Evento a ser cancelado
     */
    public nProtEvento?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE110001V100DetEvento instance.
     * Schema context: Informações do Cancelamento de evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE110001V100DetEvento) {
        this["@class"] = ".CEventosRtcE110001V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.nProtEvento = props.nProtEvento;
        }
    }
}
