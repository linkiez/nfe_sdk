import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100EDFeTiposBasicosV100Gcbs } from './CPlNfGas100EDFeTiposBasicosV100Gcbs';

import { CPlNfGas100EDFeTiposBasicosV100GEstornoCred } from './CPlNfGas100EDFeTiposBasicosV100GEstornoCred';

import { CPlNfGas100EDFeTiposBasicosV100Gibs } from './CPlNfGas100EDFeTiposBasicosV100Gibs';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais da CBS/IBS
 */
export class CPlNfGas100EDFeTiposBasicosV100IbscbsTot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Total Base de Calculo
     */
    public vBCIBSCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    /**
     * Totalização do IBS
     */
    public gIBS?: CPlNfGas100EDFeTiposBasicosV100Gibs;
    /**
     * Totalização da CBS
     */
    public gCBS?: CPlNfGas100EDFeTiposBasicosV100Gcbs;
    /**
     * Totalização do estorno de crédito
     */
    public gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100GEstornoCred;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100IbscbsTot instance.
     * Schema context: Grupo de informações de totais da CBS/IBS
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100IbscbsTot) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100IbscbsTot";


        if (props) {

            assignSchemaProperties(this, props, ["vBCIBSCBS"]);
        	this.gIBS = (props.gIBS) ? new CPlNfGas100EDFeTiposBasicosV100Gibs(props.gIBS): undefined;
        	this.gCBS = (props.gCBS) ? new CPlNfGas100EDFeTiposBasicosV100Gcbs(props.gCBS): undefined;
        	this.gEstornoCred = (props.gEstornoCred) ? new CPlNfGas100EDFeTiposBasicosV100GEstornoCred(props.gEstornoCred): undefined;
        }
    }
}
