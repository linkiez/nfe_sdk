import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Grupo de Cartões, PIX, Boletos e outros Pagamentos Eletrônicos
 */
export class CPl010CNt2022002V130LeiauteNFeV400Card {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * CNPJ da instituição de pagamento
     */
    public CNPJ?: unknown;
    /**
     * CNPJ do beneficiário do pagamento
     */
    public CNPJReceb?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Card instance.
     * Schema context: Grupo de Cartões, PIX, Boletos e outros Pagamentos Eletrônicos
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Card) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Card";


        if (props) {

            assignSchemaProperties(this, props, ["CNPJ", "CNPJReceb"]);
        }
    }
}
