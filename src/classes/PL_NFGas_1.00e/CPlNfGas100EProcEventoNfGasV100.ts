import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EProcEventoNfGasV100ProcEventoNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100EProcEventoNfGasV100ProcEventoNfGas';

/**
 * Runtime class for CPlNfGas100EProcEventoNfGasV100.
 */
export class CPlNfGas100EProcEventoNfGasV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFGas.
     */
    public procEventoNFGas?: TPlNfGas100EProcEventoNfGasV100ProcEventoNfGas;

    /**
     * Creates a new schema-backed CPlNfGas100EProcEventoNfGasV100 instance.
     * Schema context: Runtime class for CPlNfGas100EProcEventoNfGasV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EProcEventoNfGasV100) {
        this["@class"] = ".CPlNfGas100EProcEventoNfGasV100";


        if (props) {

            assignSchemaProperties(this, props, ["procEventoNFGas"]);
        }
    }
}
