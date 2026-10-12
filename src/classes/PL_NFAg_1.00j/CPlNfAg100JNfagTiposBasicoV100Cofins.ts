import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Dados do COFINS
 */
export class CPlNfAg100JNfagTiposBasicoV100Cofins {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor da BC do COFINS
     */
    public vBC?: unknown;
    /**
     * Alíquota do COFINS (em percentual)
     */
    public pCOFINS?: unknown;
    /**
     * Valor do COFINS
     */
    public vCOFINS?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Cofins instance.
     * Schema context: Dados do COFINS
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Cofins) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Cofins";


        if (props) {

            assignSchemaProperties(this, props, ["vBC", "pCOFINS", "vCOFINS"]);
        }
    }
}
