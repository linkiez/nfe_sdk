import { CEventoAverbPlV101LeiauteAverbV100Enquad } from './CEventoAverbPlV101LeiauteAverbV100Enquad';

/**
 * Informações dos itens da NF-e do evento.
 */
export class CEventoAverbPlV101LeiauteAverbV100ItensAverbados {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Data do Embarque no formato AAAA-MM-DDThh:mm:ssTZD
     */
    public dhEmbarque?: unknown;
    /**
     * Data da averbação no formato AAAA-MM-DDThh:mm:ssTZD
     */
    public dhAverbacao?: unknown;
    /**
     * Quantidade averbada do item na unidade tributária (campo uTrib)
     */
    public qItem?: unknown;
    /**
     * Grupo de informações do enquadramento do item
     */
    public enquad?: CEventoAverbPlV101LeiauteAverbV100Enquad;

    /**
     * Creates a new schema-backed CEventoAverbPlV101LeiauteAverbV100ItensAverbados instance.
     * Schema context: Informações dos itens da NF-e do evento.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100ItensAverbados) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100ItensAverbados";


        if (props) {

        	this.dhEmbarque = props.dhEmbarque;
        	this.dhAverbacao = props.dhAverbacao;
        	this.qItem = props.qItem;
        	this.enquad = (props.enquad) ? new CEventoAverbPlV101LeiauteAverbV100Enquad(props.enquad): undefined;
        }
    }
}
