import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JEventoNfAgV100EventoNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JEventoNfAgV100EventoNfAg';

/**
 * Runtime class for CPlNfAg100JEventoNfAgV100.
 */
export class CPlNfAg100JEventoNfAgV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento NFAg.
     */
    public eventoNFAg?: TPlNfAg100JEventoNfAgV100EventoNfAg;

    /**
     * Creates a new schema-backed CPlNfAg100JEventoNfAgV100 instance.
     * Schema context: Runtime class for CPlNfAg100JEventoNfAgV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JEventoNfAgV100) {
        this["@class"] = ".CPlNfAg100JEventoNfAgV100";


        if (props) {

            assignSchemaProperties(this, props, ["eventoNFAg"]);
        }
    }
}
