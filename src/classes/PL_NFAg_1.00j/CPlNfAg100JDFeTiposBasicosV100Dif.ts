import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Diferimento
 */
export class CPlNfAg100JDFeTiposBasicosV100Dif {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual do diferimento
     */
    public pDif?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do diferimento
     */
    public vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100Dif instance.
     * Schema context: Tipo Diferimento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Dif) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Dif";


        if (props) {

            assignSchemaProperties(this, props, ["pDif", "vDif"]);
        }
    }
}
