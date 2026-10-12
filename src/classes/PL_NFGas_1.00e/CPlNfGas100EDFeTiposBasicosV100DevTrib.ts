import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Devolução Tributo
 */
export class CPlNfGas100EDFeTiposBasicosV100DevTrib {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento
     */
    public vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100DevTrib instance.
     * Schema context: Tipo Devolução Tributo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100DevTrib) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100DevTrib";


        if (props) {

            assignSchemaProperties(this, props, ["vDevTrib"]);
        }
    }
}
