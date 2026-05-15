import { CPlNfAg100JNfagTiposBasicoV100VRetTribTot } from './CPlNfAg100JNfagTiposBasicoV100VRetTribTot';

/**
 * Dados dos totais da NFAg
 */
export class CPlNfAg100JNfagTiposBasicoV100Total {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor Total dos produtos e serviços
     */
    public vProd?: unknown;
    /**
     * Total da retenção de tributos federais
     */
    public vRetTribTot?: CPlNfAg100JNfagTiposBasicoV100VRetTribTot;
    /**
     * Valor do COFINS
     */
    public vCOFINS?: unknown;
    /**
     * Valor do PIS
     */
    public vPIS?: unknown;
    /**
     * Valor TFS
     */
    public vTFS?: unknown;
    /**
     * Valor TFU
     */
    public vTFU?: unknown;
    /**
     * Valor Total da NF-e
     */
    public vNF?: unknown;
    /**
     * Totais de IBS e CBS
     */
    public IBSCBSTot?: unknown;
    /**
     * Valor total do documento fiscal (vNF + total do IBS + total da CBS)
     */
    public vTotDFe?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Total instance.
     * Schema context: Dados dos totais da NFAg
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Total) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Total";


        if (props) {

        	this.vProd = props.vProd;
        	this.vRetTribTot = (props.vRetTribTot) ? new CPlNfAg100JNfagTiposBasicoV100VRetTribTot(props.vRetTribTot): undefined;
        	this.vCOFINS = props.vCOFINS;
        	this.vPIS = props.vPIS;
        	this.vTFS = props.vTFS;
        	this.vTFU = props.vTFU;
        	this.vNF = props.vNF;
        	this.IBSCBSTot = props.IBSCBSTot;
        	this.vTotDFe = props.vTotDFe;
        }
    }
}
