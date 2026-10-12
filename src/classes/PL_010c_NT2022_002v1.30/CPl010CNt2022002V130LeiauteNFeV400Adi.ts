import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Adições (NT 2011/004)
 */
export class CPl010CNt2022002V130LeiauteNFeV400Adi {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do desconto do item
     */
    public vDescDI?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Adi instance.
     * Schema context: Adições (NT 2011/004)
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Adi) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Adi";


        if (props) {

            assignSchemaProperties(this, props, ["vDescDI"]);
        }
    }
}
