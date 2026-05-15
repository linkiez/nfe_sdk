import { CEventoAverbPlV101LeiauteAverbV100ItensAverbados } from './CEventoAverbPlV101LeiauteAverbV100ItensAverbados';

/**
 * Schema XML de validação do evento de averbação da NFe (e790700)
 */
export class CEventoAverbPlV101LeiauteAverbV100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Versão do aplicativo do Autor do evento
     */
    public verAplic?: unknown;
    /**
     * Informações dos itens da NF-e do evento.
     */
    public itensAverbados?: CEventoAverbPlV101LeiauteAverbV100ItensAverbados;

    /**
     * Creates a new schema-backed CEventoAverbPlV101LeiauteAverbV100DetEvento instance.
     * Schema context: Schema XML de validação do evento de averbação da NFe (e790700)
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100DetEvento) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100DetEvento";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.itensAverbados = (props.itensAverbados) ? new CEventoAverbPlV101LeiauteAverbV100ItensAverbados(props.itensAverbados): undefined;
        }
    }
}
