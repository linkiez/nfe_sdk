import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Total da retenção de tributos federais
 */
export class CPlNfAg100JNfagTiposBasicoV100VRetTribTot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do PIS retido
     */
    public vRetPIS?: unknown;
    /**
     * Valor do COFNS retido
     */
    public vRetCofins?: unknown;
    /**
     * Valor da CSLL retida
     */
    public vRetCSLL?: unknown;
    /**
     * Valor do IRRF retido
     */
    public vIRRF?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100VRetTribTot instance.
     * Schema context: Total da retenção de tributos federais
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100VRetTribTot) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100VRetTribTot";


        if (props) {

            assignSchemaProperties(this, props, ["vRetPIS", "vRetCofins", "vRetCSLL", "vIRRF"]);
        }
    }
}
