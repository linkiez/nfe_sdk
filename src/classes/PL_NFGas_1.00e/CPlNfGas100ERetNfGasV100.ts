import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100ERetNfGasV100RetNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100ERetNfGasV100RetNfGas';

/**
 * Runtime class for CPlNfGas100ERetNfGasV100.
 */
export class CPlNfGas100ERetNfGasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret NFGas.
     */
    public retNFGas?: TPlNfGas100ERetNfGasV100RetNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100ERetNfGasV100 instance.
     * Schema context: Runtime class for CPlNfGas100ERetNfGasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ERetNfGasV100) {
        this["@class"] = ".CPlNfGas100ERetNfGasV100";


        if (props) {

            assignSchemaProperties(this, props, ["retNFGas"]);
        }
    }
}
