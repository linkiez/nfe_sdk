import { CPlNfGas100EEvCancNfGasV100EvCancNfGas } from './CPlNfGas100EEvCancNfGasV100EvCancNfGas';

/**
 * Runtime class for CPlNfGas100EEvCancNfGasV100.
 */
export class CPlNfGas100EEvCancNfGasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento do cancelamento 110111
     */
    public evCancNFGas?: CPlNfGas100EEvCancNfGasV100EvCancNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100EEvCancNfGasV100 instance.
     * Schema context: Runtime class for CPlNfGas100EEvCancNfGasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EEvCancNfGasV100) {
        this["@class"] = ".CPlNfGas100EEvCancNfGasV100";


        if (props) {

        	this.evCancNFGas = (props.evCancNFGas) ? new CPlNfGas100EEvCancNfGasV100EvCancNfGas(props.evCancNFGas): undefined;
        }
    }
}
