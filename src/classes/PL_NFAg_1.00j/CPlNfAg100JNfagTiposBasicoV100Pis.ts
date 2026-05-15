/**
 * Dados do PIS
 */
export class CPlNfAg100JNfagTiposBasicoV100Pis {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor da BC do PIS
     */
    public vBC?: unknown;
    /**
     * Alíquota do PIS (em percentual)
     */
    public pPIS?: unknown;
    /**
     * Valor do PIS
     */
    public vPIS?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Pis instance.
     * Schema context: Dados do PIS
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Pis) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Pis";


        if (props) {

        	this.vBC = props.vBC;
        	this.pPIS = props.pPIS;
        	this.vPIS = props.vPIS;
        }
    }
}
