import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JRetEventoNfAgV100RetEventoNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JRetEventoNfAgV100RetEventoNfAg';

/**
 * Runtime class for CPlNfAg100JRetEventoNfAgV100.
 */
export class CPlNfAg100JRetEventoNfAgV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Evento NFAg.
     */
    public retEventoNFAg?: TPlNfAg100JRetEventoNfAgV100RetEventoNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JRetEventoNfAgV100 instance.
     * Schema context: Runtime class for CPlNfAg100JRetEventoNfAgV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JRetEventoNfAgV100) {
        this["@class"] = ".CPlNfAg100JRetEventoNfAgV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEventoNFAg"]);
        }
    }
}
