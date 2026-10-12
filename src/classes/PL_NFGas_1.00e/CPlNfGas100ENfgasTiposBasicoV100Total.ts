import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100ENfgasTiposBasicoV100IcmsTot } from './CPlNfGas100ENfgasTiposBasicoV100IcmsTot';

import { CPlNfGas100ENfgasTiposBasicoV100VRetTribTot } from './CPlNfGas100ENfgasTiposBasicoV100VRetTribTot';

/**
 * Dados dos totais da NFGas
 */
export class CPlNfGas100ENfgasTiposBasicoV100Total {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor Total dos produtos e serviços
     */
    public vProd?: unknown;
    /**
     * Totais referentes ao ICMS
     */
    public CPlNfGas100ENfgasTiposBasicoV100IcmsTot?: CPlNfGas100ENfgasTiposBasicoV100IcmsTot;
    /**
     * Total da retenção de tributos federais
     */
    public vRetTribTot?: CPlNfGas100ENfgasTiposBasicoV100VRetTribTot;
    /**
     * Valor do COFINS
     */
    public vCOFINS?: unknown;
    /**
     * Valor do PIS
     */
    public vPIS?: unknown;
    /**
     * Valor Taxa Regulatoria
     */
    public vTxReg?: unknown;
    /**
     * Valor Total da NFGas
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
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100Total instance.
     * Schema context: Dados dos totais da NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Total) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Total";


        if (props) {

            assignSchemaProperties(this, props, ["vProd"]);
        	this.CPlNfGas100ENfgasTiposBasicoV100IcmsTot = (props.CPlNfGas100ENfgasTiposBasicoV100IcmsTot) ? new CPlNfGas100ENfgasTiposBasicoV100IcmsTot(props.CPlNfGas100ENfgasTiposBasicoV100IcmsTot): undefined;
        	this.vRetTribTot = (props.vRetTribTot) ? new CPlNfGas100ENfgasTiposBasicoV100VRetTribTot(props.vRetTribTot): undefined;
            assignSchemaProperties(this, props, ["vCOFINS", "vPIS", "vTxReg", "vNF", "IBSCBSTot", "vTotDFe"]);
        }
    }
}
