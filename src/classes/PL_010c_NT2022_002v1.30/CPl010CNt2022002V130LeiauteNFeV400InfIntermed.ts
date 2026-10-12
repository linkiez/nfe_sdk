import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Grupo de Informações do Intermediador da Transação
 */
export class CPl010CNt2022002V130LeiauteNFeV400InfIntermed {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * CNPJ do Intermediador da Transação (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios.
     */
    public CNPJ?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400InfIntermed instance.
     * Schema context: Grupo de Informações do Intermediador da Transação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400InfIntermed) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400InfIntermed";


        if (props) {

            assignSchemaProperties(this, props, ["CNPJ"]);
        }
    }
}
