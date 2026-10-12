import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130DFeTiposBasicosV100Gcbs } from './CPl010CNt2022002V130DFeTiposBasicosV100Gcbs';

import { CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov } from './CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov';

import { CPl010CNt2022002V130DFeTiposBasicosV100TribRegular } from './CPl010CNt2022002V130DFeTiposBasicosV100TribRegular';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo CBS IBS Completo
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100Cibs {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do BC
     */
    public vBC?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Grupo de Tributação da CBS
     */
    public gCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gcbs;
    /**
     * Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo.
     */
    public gTribRegular?: CPl010CNt2022002V130DFeTiposBasicosV100TribRegular;
    /**
     * Grupo de informações da composição do valor do IBS e da CBS em compras governamental
     */
    public gTribCompraGov?: CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100Cibs instance.
     * Schema context: Tipo CBS IBS Completo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Cibs) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Cibs";


        if (props) {

            assignSchemaProperties(this, props, ["vBC"]);
        	this.gCBS = (props.gCBS) ? new CPl010CNt2022002V130DFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gTribRegular = (props.gTribRegular) ? new CPl010CNt2022002V130DFeTiposBasicosV100TribRegular(props.gTribRegular): undefined;
        	this.gTribCompraGov = (props.gTribCompraGov) ? new CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov(props.gTribCompraGov): undefined;
        }
    }
}
