import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JNfagTiposBasicoV100Email } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Email';

/**
 * Tipo Dados do Endereço
 */
export class CPlNfAg100JNfagTiposBasicoV100Endereco {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior.
     */
    public cMun?: unknown;
    /**
     * Sigla da UF, informar EX para operações com o exterior.
     */
    public UF?: unknown;
    /**
     * Endereço de E-mail
     */
    public email?: TPlNfAg100JNfagTiposBasicoV100Email;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Endereco instance.
     * Schema context: Tipo Dados do Endereço
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Endereco) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Endereco";


        if (props) {

            assignSchemaProperties(this, props, ["cMun", "UF", "email"]);
        }
    }
}
