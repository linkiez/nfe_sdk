/**
 * Schema XML de validação do evento do cancelamento 1101111
 */
export class CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Número do Protocolo de Status da NF-e. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 posições ano; 10 seqüencial no ano.
     */
    public nProt?: unknown;
    /**
     * Justificativa do cancelamento
     */
    public xJust?: unknown;

    /**
     * Creates a new schema-backed CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento instance.
     * Schema context: Schema XML de validação do evento do cancelamento 1101111
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento) {
        this["@class"] = ".CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento";


        if (props) {

        	this.nProt = props.nProt;
        	this.xJust = props.xJust;
        }
    }
}
