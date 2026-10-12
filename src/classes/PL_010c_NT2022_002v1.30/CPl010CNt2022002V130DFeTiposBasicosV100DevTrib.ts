import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Devolução Tributo
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100DevTrib {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento
     */
    public vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100DevTrib instance.
     * Schema context: Tipo Devolução Tributo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100DevTrib) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100DevTrib";


        if (props) {

            assignSchemaProperties(this, props, ["vDevTrib"]);
        }
    }
}
