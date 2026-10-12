import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { TPlConsultaGtinV100CcgConsGtinConsGtinV100ConsGtin } from '../../../types/PL_ConsultaGTIN_v1.00/ccgConsGTIN/TPlConsultaGtinV100CcgConsGtinConsGtinV100ConsGtin';

/**
 * Runtime class for CPlConsultaGtinV100CcgConsGtinConsGtinV100.
 */
export class CPlConsultaGtinV100CcgConsGtinConsGtinV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property cons GTIN.
     */
    public consGTIN?: TPlConsultaGtinV100CcgConsGtinConsGtinV100ConsGtin;

    /**
     * Creates a new schema-backed CPlConsultaGtinV100CcgConsGtinConsGtinV100 instance.
     * Schema context: Runtime class for CPlConsultaGtinV100CcgConsGtinConsGtinV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlConsultaGtinV100CcgConsGtinConsGtinV100) {
        this["@class"] = ".CPlConsultaGtinV100CcgConsGtinConsGtinV100";


        if (props) {

            assignSchemaProperties(this, props, ["consGTIN"]);
        }
    }
}
