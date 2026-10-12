import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPlNfGas100EDFeTiposBasicosV100Gibsuf.
 */
export class CPlNfGas100EDFeTiposBasicosV100Gibsuf {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100Gibsuf instance.
     * Schema context: Runtime class for CPlNfGas100EDFeTiposBasicosV100Gibsuf.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Gibsuf) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Gibsuf";


        if (props) {

            assignSchemaProperties(this, props, ["vDif", "vDevTrib", "vIBSUF"]);
        }
    }
}
