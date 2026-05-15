/**
 * Schema XML de validação do evento de Cancelamento do Comprovante de Entrega da NF-e
 */
export class CEventoEconfV100E110751V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Versão do Aplicativo do Autor do Evento
     */
    public verAplic?: unknown;
    /**
     * Número do Protocolo de Autorização do Evento da NF-e a que se refere este cancelamento.
     */
    public nProtEvento?: unknown;

    /**
     * Creates a new schema-backed CEventoEconfV100E110751V100DetEvento instance.
     * Schema context: Schema XML de validação do evento de Cancelamento do Comprovante de Entrega da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100E110751V100DetEvento) {
        this["@class"] = ".CEventoEconfV100E110751V100DetEvento";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.nProtEvento = props.nProtEvento;
        }
    }
}
