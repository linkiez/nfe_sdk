/**
 * Grupo de detalhamento da forma de pagamento.
 */
export class CEventoEconfV100E110750V100DetPag {
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
     * Creates a new schema-backed CEventoEconfV100E110750V100DetPag instance.
     * Schema context: Grupo de detalhamento da forma de pagamento.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100E110750V100DetPag) {
        this["@class"] = ".CEventoEconfV100E110750V100DetPag";


        if (props) {

        	this.vPag = props.vPag;
        	this.dPag = props.dPag;
        }
    }
}
