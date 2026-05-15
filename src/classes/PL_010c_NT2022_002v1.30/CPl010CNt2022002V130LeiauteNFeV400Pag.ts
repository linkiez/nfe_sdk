import { CPl010CNt2022002V130LeiauteNFeV400DetPag } from './CPl010CNt2022002V130LeiauteNFeV400DetPag';

/**
 * Dados de Pagamento. Obrigatório apenas para (NFC-e) NT 2012/004
 */
export class CPl010CNt2022002V130LeiauteNFeV400Pag {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Grupo de detalhamento da forma de pagamento.
     */
    public detPag?: CPl010CNt2022002V130LeiauteNFeV400DetPag;
    /**
     * Valor do Troco.
     */
    public vTroco?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Pag instance.
     * Schema context: Dados de Pagamento. Obrigatório apenas para (NFC-e) NT 2012/004
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Pag) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Pag";


        if (props) {

        	this.detPag = (props.detPag) ? new CPl010CNt2022002V130LeiauteNFeV400DetPag(props.detPag): undefined;
        	this.vTroco = props.vTroco;
        }
    }
}
