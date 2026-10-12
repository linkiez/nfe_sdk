import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Referenciamento de item de outros DFe
 */
export class CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Chave de Acesso do DFe referenciado
     */
    public chaveAcesso?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado instance.
     * Schema context: Referenciamento de item de outros DFe
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado";


        if (props) {

            assignSchemaProperties(this, props, ["chaveAcesso"]);
        }
    }
}
