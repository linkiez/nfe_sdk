import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130DFeTiposBasicosV100CompetApur } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100CompetApur';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Ajuste de Competência
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Ano e mês referência do período de apuração (AAAA-MM)
     */
    public competApur?: TPl010CNt2022002V130DFeTiposBasicosV100CompetApur;
    /**
     * Valor do IBS
     */
    public vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS
     */
    public vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet instance.
     * Schema context: Tipo Ajuste de Competência
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet";


        if (props) {

            assignSchemaProperties(this, props, ["competApur", "vIBS", "vCBS"]);
        }
    }
}
