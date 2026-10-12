import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100ENfgasTiposBasicoV100Email } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Email';

/**
 * Tipo Dados do Endereço
 */
export class CPlNfGas100ENfgasTiposBasicoV100Endereco {
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
    public email?: TPlNfGas100ENfgasTiposBasicoV100Email;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100Endereco instance.
     * Schema context: Tipo Dados do Endereço
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Endereco) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Endereco";


        if (props) {

            assignSchemaProperties(this, props, ["cMun", "UF", "email"]);
        }
    }
}
