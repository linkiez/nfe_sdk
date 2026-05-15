/**
 * Schema XML de validação do evento de Ator Interessado na NF-e - Transportador (110150)”
 */
export class CEventoAtorInteressadoPlV102110150V100DetEvento {
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
     * Creates a new schema-backed CEventoAtorInteressadoPlV102110150V100DetEvento instance.
     * Schema context: Schema XML de validação do evento de Ator Interessado na NF-e - Transportador (110150)”
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102110150V100DetEvento) {
        this["@class"] = ".CEventoAtorInteressadoPlV102110150V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        }
    }
}
