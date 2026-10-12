import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Runtime class for CPl010CNt2022002V130DFeTiposBasicosV100GibsMun.
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100GibsMun {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
     */
    public vIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100GibsMun instance.
     * Schema context: Runtime class for CPl010CNt2022002V130DFeTiposBasicosV100GibsMun.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GibsMun) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GibsMun";


        if (props) {

            assignSchemaProperties(this, props, ["vDif", "vDevTrib", "vIBSMun"]);
        }
    }
}
