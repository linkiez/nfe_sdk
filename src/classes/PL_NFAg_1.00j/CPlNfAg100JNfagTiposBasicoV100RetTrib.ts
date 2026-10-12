import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Grupo de informações de retenção de tributos federais
 */
export class CPlNfAg100JNfagTiposBasicoV100RetTrib {
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
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100RetTrib instance.
     * Schema context: Grupo de informações de retenção de tributos federais
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100RetTrib) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100RetTrib";


        if (props) {

            assignSchemaProperties(this, props, ["vRetPIS", "vRetCofins", "vRetCSLL", "vIRRF"]);
        }
    }
}
