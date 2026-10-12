import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JNfagTiposBasicoV100Email } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Email';

/**
 * Tipo Dados da Responsável Técnico
 */
export class CPlNfAg100JNfagTiposBasicoV100RespTec {
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
    public email?: TPlNfAg100JNfagTiposBasicoV100Email;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100RespTec instance.
     * Schema context: Tipo Dados da Responsável Técnico
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100RespTec) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100RespTec";


        if (props) {

            assignSchemaProperties(this, props, ["CNPJ", "email"]);
        }
    }
}
