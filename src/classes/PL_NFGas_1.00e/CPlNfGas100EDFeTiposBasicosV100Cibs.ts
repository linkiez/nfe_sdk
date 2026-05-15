import { CPlNfGas100EDFeTiposBasicosV100Gcbs } from './CPlNfGas100EDFeTiposBasicosV100Gcbs';

import { CPlNfGas100EDFeTiposBasicosV100TribCompraGov } from './CPlNfGas100EDFeTiposBasicosV100TribCompraGov';

import { CPlNfGas100EDFeTiposBasicosV100TribRegular } from './CPlNfGas100EDFeTiposBasicosV100TribRegular';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo CBS IBS Completo
 */
export class CPlNfGas100EDFeTiposBasicosV100Cibs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do BC
     */
    public vBC?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Grupo de Tributação da CBS
     */
    public gCBS?: CPlNfGas100EDFeTiposBasicosV100Gcbs;
    /**
     * Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo.
     */
    public gTribRegular?: CPlNfGas100EDFeTiposBasicosV100TribRegular;
    /**
     * Grupo de informações da composição do valor do IBS e da CBS em compras governamental
     */
    public gTribCompraGov?: CPlNfGas100EDFeTiposBasicosV100TribCompraGov;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100Cibs instance.
     * Schema context: Tipo CBS IBS Completo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Cibs) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Cibs";


        if (props) {

        	this.vBC = props.vBC;
        	this.gCBS = (props.gCBS) ? new CPlNfGas100EDFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gTribRegular = (props.gTribRegular) ? new CPlNfGas100EDFeTiposBasicosV100TribRegular(props.gTribRegular): undefined;
        	this.gTribCompraGov = (props.gTribCompraGov) ? new CPlNfGas100EDFeTiposBasicosV100TribCompraGov(props.gTribCompraGov): undefined;
        }
    }
}
