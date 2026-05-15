import { CEventoInsucessoNFePlV102Tmp0000DetEvento } from './CEventoInsucessoNFePlV102Tmp0000DetEvento';

/**
 * Runtime class for CEventoInsucessoNFePlV102Tmp0000.
 */
export class CEventoInsucessoNFePlV102Tmp0000 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento de Comprovante de Entrega da NF-e
     */
    public detEvento?: CEventoInsucessoNFePlV102Tmp0000DetEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102Tmp0000 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102Tmp0000.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102Tmp0000) {
        this["@class"] = ".CEventoInsucessoNFePlV102Tmp0000";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoInsucessoNFePlV102Tmp0000DetEvento(props.detEvento): undefined;
        }
    }
}
