import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Tipo Dados do Endereço // 24/10/08 - tamanho mínimo
 */
export class CPl010CNt2022002V130LeiauteNFeV400Endereco {
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
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Endereco instance.
     * Schema context: Tipo Dados do Endereço // 24/10/08 - tamanho mínimo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Endereco) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Endereco";


        if (props) {

            assignSchemaProperties(this, props, ["cMun", "UF"]);
        }
    }
}
