/**
 * Informações de crédito
 */
export class CEventosRtcE211150V100GCredito {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor da solicitação de crédito a ser apropriado de IBS
     */
    public vCredIBS?: unknown;
    /**
     * Valor da solicitação de crédito a ser apropriado de CBS
     */
    public vCredCBS?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE211150V100GCredito instance.
     * Schema context: Informações de crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211150V100GCredito) {
        this["@class"] = ".CEventosRtcE211150V100GCredito";


        if (props) {

        	this.vCredIBS = props.vCredIBS;
        	this.vCredCBS = props.vCredCBS;
        }
    }
}
