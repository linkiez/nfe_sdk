import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Taxa de Fiscalização de Uso
 */
export class CPlNfAg100JNfagTiposBasicoV100Fu {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor BC TFU
     */
    public vBCTFU?: unknown;
    /**
     * Alíquota do TFU
     */
    public pTFU?: unknown;
    /**
     * Valor TFU
     */
    public vTFU?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Fu instance.
     * Schema context: Taxa de Fiscalização de Uso
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Fu) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Fu";


        if (props) {

            assignSchemaProperties(this, props, ["vBCTFU", "pTFU", "vTFU"]);
        }
    }
}
