import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Deduções - Taxas e Contribuições
 */
export class CPl010CNt2022002V130LeiauteNFeV400Deduc {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * valor da dedução
     */
    public vDed?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Deduc instance.
     * Schema context: Deduções - Taxas e Contribuições
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Deduc) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Deduc";


        if (props) {

            assignSchemaProperties(this, props, ["vDed"]);
        }
    }
}
