/**
 * Schema XML de validação do evento de Comprovante de Entrega da NF-e
 */
export class CEventoInsucessoNFePlV102E110192V100DetEvento {
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
     * Data e hora do final da tentativa entrega. Formato AAAA-MMDDThh:mm:ssTZD
     */
    public dhTentativaEntrega?: unknown;
    /**
     * Latitude do ponto de entrega
     */
    public latGPS?: unknown;
    /**
     * Longitude do ponto de entrega
     */
    public longGPS?: unknown;
    /**
     * Data e hora da geração do hash da tentativa de entrega. Formato AAAA-MMDDThh:mm:ssTZD.
     */
    public dhHashTentativaEntrega?: unknown;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102E110192V100DetEvento instance.
     * Schema context: Schema XML de validação do evento de Comprovante de Entrega da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102E110192V100DetEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102E110192V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.dhTentativaEntrega = props.dhTentativaEntrega;
        	this.latGPS = props.latGPS;
        	this.longGPS = props.longGPS;
        	this.dhHashTentativaEntrega = props.dhHashTentativaEntrega;
        }
    }
}
