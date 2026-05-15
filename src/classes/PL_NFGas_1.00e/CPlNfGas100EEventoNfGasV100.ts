import { TPlNfGas100EEventoNfGasV100EventoNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100EEventoNfGasV100EventoNfGas';

/**
 * Runtime class for CPlNfGas100EEventoNfGasV100.
 */
export class CPlNfGas100EEventoNfGasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento NFGas.
     */
    public eventoNFGas?: TPlNfGas100EEventoNfGasV100EventoNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100EEventoNfGasV100 instance.
     * Schema context: Runtime class for CPlNfGas100EEventoNfGasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EEventoNfGasV100) {
        this["@class"] = ".CPlNfGas100EEventoNfGasV100";


        if (props) {

        	this.eventoNFGas = props.eventoNFGas;
        }
    }
}
