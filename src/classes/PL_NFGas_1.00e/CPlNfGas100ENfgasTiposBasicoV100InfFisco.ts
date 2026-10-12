import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Mensagem do Fisco
 */
export class CPlNfGas100ENfgasTiposBasicoV100InfFisco {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Mensagem do Fisco
     */
    public xMsg?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100InfFisco instance.
     * Schema context: Mensagem do Fisco
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100InfFisco) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100InfFisco";


        if (props) {

            assignSchemaProperties(this, props, ["xMsg"]);
        }
    }
}
