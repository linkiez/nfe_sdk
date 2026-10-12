import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Devolução Tributo
 */
export class CPlNfAg100JDFeTiposBasicosV100DevTrib {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento
     */
    public vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100DevTrib instance.
     * Schema context: Tipo Devolução Tributo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100DevTrib) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100DevTrib";


        if (props) {

            assignSchemaProperties(this, props, ["vDevTrib"]);
        }
    }
}
