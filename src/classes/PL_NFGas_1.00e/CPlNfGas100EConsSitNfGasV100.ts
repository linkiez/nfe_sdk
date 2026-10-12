import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EConsSitNfGasV100ConsSitNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100EConsSitNfGasV100ConsSitNfGas';

/**
 * Runtime class for CPlNfGas100EConsSitNfGasV100.
 */
export class CPlNfGas100EConsSitNfGasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property cons Sit NFGas.
     */
    public consSitNFGas?: TPlNfGas100EConsSitNfGasV100ConsSitNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100EConsSitNfGasV100 instance.
     * Schema context: Runtime class for CPlNfGas100EConsSitNfGasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EConsSitNfGasV100) {
        this["@class"] = ".CPlNfGas100EConsSitNfGasV100";


        if (props) {

            assignSchemaProperties(this, props, ["consSitNFGas"]);
        }
    }
}
