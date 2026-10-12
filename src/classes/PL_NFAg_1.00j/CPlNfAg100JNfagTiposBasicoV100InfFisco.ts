import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Mensagem do Fisco
 */
export class CPlNfAg100JNfagTiposBasicoV100InfFisco {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Mensagem do Fisco
     */
    public xMsg?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100InfFisco instance.
     * Schema context: Mensagem do Fisco
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100InfFisco) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100InfFisco";


        if (props) {

            assignSchemaProperties(this, props, ["xMsg"]);
        }
    }
}
