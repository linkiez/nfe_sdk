/**
 * Schema XML de validação do evento do cancelamento 110111
 */
export class CPlNfGas100EEvCancNfGasV100EvCancNfGas {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Número do Protocolo de Status da NFGas.
     */
    public nProt?: unknown;
    /**
     * Justificativa do Cancelamento
     */
    public xJust?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100EEvCancNfGasV100EvCancNfGas instance.
     * Schema context: Schema XML de validação do evento do cancelamento 110111
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EEvCancNfGasV100EvCancNfGas) {
        this["@class"] = ".CPlNfGas100EEvCancNfGasV100EvCancNfGas";


        if (props) {

        	this.nProt = props.nProt;
        	this.xJust = props.xJust;
        }
    }
}
