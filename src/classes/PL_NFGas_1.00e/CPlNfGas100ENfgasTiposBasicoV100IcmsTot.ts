/**
 * Totais referentes ao ICMS
 */
export class CPlNfGas100ENfgasTiposBasicoV100IcmsTot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * BC do ICMS
     */
    public vBC?: unknown;
    /**
     * Valor Total do ICMS
     */
    public vICMS?: unknown;
    /**
     * Valor Total do ICMS desonerado
     */
    public vICMSDeson?: unknown;
    /**
     * Valor Total do FCP (Fundo de Combate à Pobreza).
     */
    public vFCP?: unknown;
    /**
     * BC do ICMS ST
     */
    public vBCST?: unknown;
    /**
     * Valor Total do ICMS ST
     */
    public vST?: unknown;
    /**
     * Valor Total do FCP (Fundo de Combate à Pobreza) retido por substituição tributária.
     */
    public vFCPST?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100IcmsTot instance.
     * Schema context: Totais referentes ao ICMS
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100IcmsTot) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100IcmsTot";


        if (props) {

        	this.vBC = props.vBC;
        	this.vICMS = props.vICMS;
        	this.vICMSDeson = props.vICMSDeson;
        	this.vFCP = props.vFCP;
        	this.vBCST = props.vBCST;
        	this.vST = props.vST;
        	this.vFCPST = props.vFCPST;
        }
    }
}
