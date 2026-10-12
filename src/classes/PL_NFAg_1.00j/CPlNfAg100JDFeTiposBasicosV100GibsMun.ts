import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPlNfAg100JDFeTiposBasicosV100GibsMun.
 */
export class CPlNfAg100JDFeTiposBasicosV100GibsMun {
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
    public vIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100GibsMun instance.
     * Schema context: Runtime class for CPlNfAg100JDFeTiposBasicosV100GibsMun.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GibsMun) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GibsMun";


        if (props) {

            assignSchemaProperties(this, props, ["vDif", "vDevTrib", "vIBSMun"]);
        }
    }
}
