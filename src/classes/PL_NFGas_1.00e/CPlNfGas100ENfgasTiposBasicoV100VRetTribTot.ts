/**
 * Total da retenção de tributos federais
 */
export class CPlNfGas100ENfgasTiposBasicoV100VRetTribTot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do PIS retido
     */
    public vRetPIS?: unknown;
    /**
     * Valor do COFNS retido
     */
    public vRetCofins?: unknown;
    /**
     * Valor da CSLL retida
     */
    public vRetCSLL?: unknown;
    /**
     * Valor do IRRF retido
     */
    public vIRRF?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100VRetTribTot instance.
     * Schema context: Total da retenção de tributos federais
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100VRetTribTot) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100VRetTribTot";


        if (props) {

        	this.vRetPIS = props.vRetPIS;
        	this.vRetCofins = props.vRetCofins;
        	this.vRetCSLL = props.vRetCSLL;
        	this.vIRRF = props.vIRRF;
        }
    }
}
