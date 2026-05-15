/**
 * Informações do Evento de Manifestação sobre Pedido de Transferência de Créditode CBS em Operação de Sucessão
 */
export class CEventosRtcE212120V100DetEvento {
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
     * Creates a new schema-backed CEventosRtcE212120V100DetEvento instance.
     * Schema context: Informações do Evento de Manifestação sobre Pedido de Transferência de Créditode CBS em Operação de Sucessão
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE212120V100DetEvento) {
        this["@class"] = ".CEventosRtcE212120V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        }
    }
}
