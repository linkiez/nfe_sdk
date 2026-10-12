import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100ENfgasTiposBasicoV100Email } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Email';

/**
 * Tipo Dados da Responsável Técnico
 */
export class CPlNfGas100ENfgasTiposBasicoV100RespTec {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico.
     */
    public CNPJ?: unknown;
    /**
     * Email da pessoa jurídica a ser contatada
     */
    public email?: TPlNfGas100ENfgasTiposBasicoV100Email;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100RespTec instance.
     * Schema context: Tipo Dados da Responsável Técnico
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100RespTec) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100RespTec";


        if (props) {

            assignSchemaProperties(this, props, ["CNPJ", "email"]);
        }
    }
}
