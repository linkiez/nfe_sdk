import { TPlNfGas100ENfgasV100NfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasV100NfGas';

/**
 * Runtime class for CPlNfGas100ENfgasV100.
 */
export class CPlNfGas100ENfgasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property n FGas.
     */
    public nFGas?: TPlNfGas100ENfgasV100NfGas;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasV100 instance.
     * Schema context: Runtime class for CPlNfGas100ENfgasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasV100) {
        this["@class"] = ".CPlNfGas100ENfgasV100";


        if (props) {

        	this.nFGas = props.nFGas;
        }
    }
}
