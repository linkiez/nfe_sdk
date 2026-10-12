import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Número do lote do produto.
 */
export class CPl010CNt2022002V130LeiauteNFeV400Rastro {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade de produto no lote.
     */
    public qLote?: unknown;
    /**
     * Data de fabricação/produção. Formato &quot;AAAA-MM-DD&quot;.
     */
    public dFab?: unknown;
    /**
     * Data de validade. Informar o último dia do mês caso a validade não especifique o dia. Formato &quot;AAAA-MM-DD&quot;.
     */
    public dVal?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Rastro instance.
     * Schema context: Número do lote do produto.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Rastro) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Rastro";


        if (props) {

            assignSchemaProperties(this, props, ["qLote", "dFab", "dVal"]);
        }
    }
}
