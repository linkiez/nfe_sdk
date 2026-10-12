import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130LeiauteNFeV400Card } from './CPl010CNt2022002V130LeiauteNFeV400Card';

/**
 * Grupo de detalhamento da forma de pagamento.
 */
export class CPl010CNt2022002V130LeiauteNFeV400DetPag {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do Pagamento. Esta tag poderá ser omitida quando a tag tPag=90 (Sem Pagamento), caso contrário deverá ser preenchida.
     */
    public vPag?: unknown;
    /**
     * Data do Pagamento
     */
    public dPag?: unknown;
    /**
     * Grupo de Cartões, PIX, Boletos e outros Pagamentos Eletrônicos
     */
    public card?: CPl010CNt2022002V130LeiauteNFeV400Card;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400DetPag instance.
     * Schema context: Grupo de detalhamento da forma de pagamento.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400DetPag) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400DetPag";


        if (props) {

            assignSchemaProperties(this, props, ["vPag", "dPag"]);
        	this.card = (props.card) ? new CPl010CNt2022002V130LeiauteNFeV400Card(props.card): undefined;
        }
    }
}
