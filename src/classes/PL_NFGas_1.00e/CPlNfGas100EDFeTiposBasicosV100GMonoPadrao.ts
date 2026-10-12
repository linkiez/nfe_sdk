import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica padrão
 */
export class CPlNfGas100EDFeTiposBasicosV100GMonoPadrao {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade tributada na monofasia
     */
    public qBCMono?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
    /**
     * Alíquota ad rem do IBS
     */
    public adRemIBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Alíquota ad rem da CBS
     */
    public adRemCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS monofásico
     */
    public vIBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor da CBS monofásica
     */
    public vCBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100GMonoPadrao instance.
     * Schema context: Grupo de informações da Tributação Monofásica padrão
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GMonoPadrao) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GMonoPadrao";


        if (props) {

            assignSchemaProperties(this, props, ["qBCMono", "adRemIBS", "adRemCBS", "vIBSMono", "vCBSMono"]);
        }
    }
}
