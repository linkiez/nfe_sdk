import { CEventoInsucessoNFePlV102E110193V100DetEvento } from './CEventoInsucessoNFePlV102E110193V100DetEvento';

/**
 * Runtime class for CEventoInsucessoNFePlV102E110193V100.
 */
export class CEventoInsucessoNFePlV102E110193V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento de Cancelamento do Comprovante de Entrega da NF-e
     */
    public detEvento?: CEventoInsucessoNFePlV102E110193V100DetEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102E110193V100 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102E110193V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102E110193V100) {
        this["@class"] = ".CEventoInsucessoNFePlV102E110193V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoInsucessoNFePlV102E110193V100DetEvento(props.detEvento): undefined;
        }
    }
}
