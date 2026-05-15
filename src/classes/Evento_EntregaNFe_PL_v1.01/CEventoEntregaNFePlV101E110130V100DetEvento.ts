/**
 * Schema XML de validação do evento de Comprovante de Entrega da NF-e
 */
export class CEventoEntregaNFePlV101E110130V100DetEvento {
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
     * Data e hora do final da entrega. Formato AAAA-MMDDThh:mm:ssTZD
     */
    public dhEntrega?: unknown;
    /**
     * Latitude do ponto de entrega
     */
    public latGPS?: unknown;
    /**
     * Longitude do ponto de entrega
     */
    public longGPS?: unknown;
    /**
     * Data e hora da geração do hash do Comprovante de Entrega da NF-e. Formato AAAA-MMDDThh:mm:ssTZD.
     */
    public dhHashComprovante?: unknown;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101E110130V100DetEvento instance.
     * Schema context: Schema XML de validação do evento de Comprovante de Entrega da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101E110130V100DetEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101E110130V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.dhEntrega = props.dhEntrega;
        	this.latGPS = props.latGPS;
        	this.longGPS = props.longGPS;
        	this.dhHashComprovante = props.dhHashComprovante;
        }
    }
}
