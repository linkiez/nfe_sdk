import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JNfagTiposBasicoV100GHistCons } from './CPlNfAg100JNfagTiposBasicoV100GHistCons';

/**
 * Grupo de informações da Agência reguladora
 */
export class CPlNfAg100JNfagTiposBasicoV100GAgencia {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Data de emissão do Selo de segurança do prestador
     */
    public dEmissSelo?: unknown;
    /**
     * Histórico de Consumo
     */
    public gHistCons?: CPlNfAg100JNfagTiposBasicoV100GHistCons;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GAgencia instance.
     * Schema context: Grupo de informações da Agência reguladora
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GAgencia) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GAgencia";


        if (props) {

            assignSchemaProperties(this, props, ["dEmissSelo"]);
        	this.gHistCons = (props.gHistCons) ? new CPlNfAg100JNfagTiposBasicoV100GHistCons(props.gHistCons): undefined;
        }
    }
}
