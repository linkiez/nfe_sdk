import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Tipo Dados do Veículo
 */
export class CPl010CNt2022002V130LeiauteNFeV400Veiculo {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Sigla da UF
     */
    public UF?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Veiculo instance.
     * Schema context: Tipo Dados do Veículo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Veiculo) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Veiculo";


        if (props) {

            assignSchemaProperties(this, props, ["UF"]);
        }
    }
}
