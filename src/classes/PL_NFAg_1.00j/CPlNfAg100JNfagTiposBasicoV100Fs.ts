import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Taxa de Fiscalização de Serviço
 */
export class CPlNfAg100JNfagTiposBasicoV100Fs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor BC TFS
     */
    public vBCTFS?: unknown;
    /**
     * Alíquota do TFS
     */
    public pTFS?: unknown;
    /**
     * Valor TFS
     */
    public vTFS?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Fs instance.
     * Schema context: Taxa de Fiscalização de Serviço
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Fs) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Fs";


        if (props) {

            assignSchemaProperties(this, props, ["vBCTFS", "pTFS", "vTFS"]);
        }
    }
}
