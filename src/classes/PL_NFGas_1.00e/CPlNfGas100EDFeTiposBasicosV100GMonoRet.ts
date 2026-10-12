import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica retida anteriormente
 */
export class CPlNfGas100EDFeTiposBasicosV100GMonoRet {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade tributada retida anteriormente
     */
    public qBCMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
    /**
     * Alíquota ad rem do IBS retido anteriormente
     */
    public adRemIBSRet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor do IBS retido anteriormente
     */
    public vIBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Alíquota ad rem da CBS retida anteriormente
     */
    public adRemCBSRet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Valor da CBS retida anteriormente
     */
    public vCBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100GMonoRet instance.
     * Schema context: Grupo de informações da Tributação Monofásica retida anteriormente
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100GMonoRet) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100GMonoRet";


        if (props) {

            assignSchemaProperties(this, props, ["qBCMonoRet", "adRemIBSRet", "vIBSMonoRet", "adRemCBSRet", "vCBSMonoRet"]);
        }
    }
}
