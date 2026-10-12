import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações do Responsável Técnico pela emissão do DF-e
 */
export class CPl010CNt2022002V130LeiauteNFeV400InfRespTec {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property CNPJ.
     */
    public CNPJ?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400InfRespTec instance.
     * Schema context: Informações do Responsável Técnico pela emissão do DF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400InfRespTec) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400InfRespTec";


        if (props) {

            assignSchemaProperties(this, props, ["CNPJ"]);
        }
    }
}
