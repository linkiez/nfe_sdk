import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Exportação indireta
 */
export class CPl010CNt2022002V130LeiauteNFeV400ExportInd {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Chave de acesso da NF-e recebida para exportação
     */
    public chNFe?: unknown;
    /**
     * Quantidade do item efetivamente exportado
     */
    public qExport?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400ExportInd instance.
     * Schema context: Exportação indireta
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ExportInd) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ExportInd";


        if (props) {

            assignSchemaProperties(this, props, ["chNFe", "qExport"]);
        }
    }
}
