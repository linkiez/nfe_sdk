/**
 * Schema XML de validação do evento de Cancelamento do Comprovante de Entrega da NF-e
 */
export class CEventoEntregaNFePlV101E110131V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property c Orgao Autor.
     */
    public cOrgaoAutor?: unknown;
    /**
     * Versão do Aplicativo do Autor do Evento
     */
    public verAplic?: unknown;
    /**
     * Número do Protocolo de Autorização do Evento da NF-e a que se refere este cancelamento.
     */
    public nProtEvento?: unknown;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101E110131V100DetEvento instance.
     * Schema context: Schema XML de validação do evento de Cancelamento do Comprovante de Entrega da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101E110131V100DetEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101E110131V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.nProtEvento = props.nProtEvento;
        }
    }
}
