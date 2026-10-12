import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100ERetEventoNfGasV100RetEventoNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100ERetEventoNfGasV100RetEventoNfGas';

/**
 * Runtime class for CPlNfGas100ERetEventoNfGasV100.
 */
export class CPlNfGas100ERetEventoNfGasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Evento NFGas.
     */
    public retEventoNFGas?: TPlNfGas100ERetEventoNfGasV100RetEventoNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100ERetEventoNfGasV100 instance.
     * Schema context: Runtime class for CPlNfGas100ERetEventoNfGasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ERetEventoNfGasV100) {
        this["@class"] = ".CPlNfGas100ERetEventoNfGasV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEventoNFGas"]);
        }
    }
}
