import { CPlNfAg100JDFeTiposBasicosV100Gcbs } from './CPlNfAg100JDFeTiposBasicosV100Gcbs';

import { CPlNfAg100JDFeTiposBasicosV100TribCompraGov } from './CPlNfAg100JDFeTiposBasicosV100TribCompraGov';

import { CPlNfAg100JDFeTiposBasicosV100TribRegular } from './CPlNfAg100JDFeTiposBasicosV100TribRegular';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo CBS IBS Completo
 */
export class CPlNfAg100JDFeTiposBasicosV100Cibs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do BC
     */
    public vBC?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Grupo de Tributação da CBS
     */
    public gCBS?: CPlNfAg100JDFeTiposBasicosV100Gcbs;
    /**
     * Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo.
     */
    public gTribRegular?: CPlNfAg100JDFeTiposBasicosV100TribRegular;
    /**
     * Grupo de informações da composição do valor do IBS e da CBS em compras governamental
     */
    public gTribCompraGov?: CPlNfAg100JDFeTiposBasicosV100TribCompraGov;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100Cibs instance.
     * Schema context: Tipo CBS IBS Completo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Cibs) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Cibs";


        if (props) {

        	this.vBC = props.vBC;
        	this.gCBS = (props.gCBS) ? new CPlNfAg100JDFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gTribRegular = (props.gTribRegular) ? new CPlNfAg100JDFeTiposBasicosV100TribRegular(props.gTribRegular): undefined;
        	this.gTribCompraGov = (props.gTribCompraGov) ? new CPlNfAg100JDFeTiposBasicosV100TribCompraGov(props.gTribCompraGov): undefined;
        }
    }
}
