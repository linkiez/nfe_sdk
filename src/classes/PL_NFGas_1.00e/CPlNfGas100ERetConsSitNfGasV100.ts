import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100ERetConsSitNfGasV100RetConsSitNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100ERetConsSitNfGasV100RetConsSitNfGas';

/**
 * Runtime class for CPlNfGas100ERetConsSitNfGasV100.
 */
export class CPlNfGas100ERetConsSitNfGasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Cons Sit NFGas.
     */
    public retConsSitNFGas?: TPlNfGas100ERetConsSitNfGasV100RetConsSitNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100ERetConsSitNfGasV100 instance.
     * Schema context: Runtime class for CPlNfGas100ERetConsSitNfGasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ERetConsSitNfGasV100) {
        this["@class"] = ".CPlNfGas100ERetConsSitNfGasV100";


        if (props) {

            assignSchemaProperties(this, props, ["retConsSitNFGas"]);
        }
    }
}
