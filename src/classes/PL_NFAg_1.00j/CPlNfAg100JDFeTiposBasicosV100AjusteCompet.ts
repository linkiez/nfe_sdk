import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JDFeTiposBasicosV100CompetApur } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100CompetApur';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Ajuste de Competência
 */
export class CPlNfAg100JDFeTiposBasicosV100AjusteCompet {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Ano e mês referência do período de apuração (AAAA-MM)
     */
    public competApur?: TPlNfAg100JDFeTiposBasicosV100CompetApur;
    /**
     * Valor do IBS
     */
    public vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS
     */
    public vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100AjusteCompet instance.
     * Schema context: Tipo Ajuste de Competência
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100AjusteCompet) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100AjusteCompet";


        if (props) {

            assignSchemaProperties(this, props, ["competApur", "vIBS", "vCBS"]);
        }
    }
}
