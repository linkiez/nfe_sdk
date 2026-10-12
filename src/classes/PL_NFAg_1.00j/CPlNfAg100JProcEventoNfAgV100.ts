import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JProcEventoNfAgV100ProcEventoNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JProcEventoNfAgV100ProcEventoNfAg';

/**
 * Runtime class for CPlNfAg100JProcEventoNfAgV100.
 */
export class CPlNfAg100JProcEventoNfAgV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFAg.
     */
    public procEventoNFAg?: TPlNfAg100JProcEventoNfAgV100ProcEventoNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JProcEventoNfAgV100 instance.
     * Schema context: Runtime class for CPlNfAg100JProcEventoNfAgV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JProcEventoNfAgV100) {
        this["@class"] = ".CPlNfAg100JProcEventoNfAgV100";


        if (props) {

            assignSchemaProperties(this, props, ["procEventoNFAg"]);
        }
    }
}
