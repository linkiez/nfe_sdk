import { CEventoSuframaInternalizaPlV101E990910V100DetEvento } from './CEventoSuframaInternalizaPlV101E990910V100DetEvento';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101E990910V100.
 */
export class CEventoSuframaInternalizaPlV101E990910V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento do Confirmação de Internalização da Mercadoria na SUFRAMA 990910
     */
    public detEvento?: CEventoSuframaInternalizaPlV101E990910V100DetEvento;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101E990910V100 instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101E990910V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101E990910V100) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101E990910V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoSuframaInternalizaPlV101E990910V100DetEvento(props.detEvento): undefined;
        }
    }
}
