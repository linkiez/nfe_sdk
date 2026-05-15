/**
 * Schema XML de validação do evento do Confirmação de Internalização da Mercadoria na SUFRAMA 990910
 */
export class CEventoSuframaInternalizaPlV101E990910V100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Data de ocorrência da vistoria, formato UTC (AAAA-MM-DDThh:mm:ssTZD, onde TZD = +hh:mm ou -hh:mm)
     */
    public dVistoria?: unknown;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101E990910V100DetEvento instance.
     * Schema context: Schema XML de validação do evento do Confirmação de Internalização da Mercadoria na SUFRAMA 990910
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101E990910V100DetEvento) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101E990910V100DetEvento";


        if (props) {

        	this.dVistoria = props.dVistoria;
        }
    }
}
