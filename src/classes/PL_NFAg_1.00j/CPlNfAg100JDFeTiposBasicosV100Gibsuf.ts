import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPlNfAg100JDFeTiposBasicosV100Gibsuf.
 */
export class CPlNfAg100JDFeTiposBasicosV100Gibsuf {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100Gibsuf instance.
     * Schema context: Runtime class for CPlNfAg100JDFeTiposBasicosV100Gibsuf.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Gibsuf) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Gibsuf";


        if (props) {

            assignSchemaProperties(this, props, ["vDif", "vDevTrib", "vIBSUF"]);
        }
    }
}
