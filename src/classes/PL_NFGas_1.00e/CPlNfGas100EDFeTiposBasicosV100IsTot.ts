import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais do Imposto Seletivo
 */
export class CPlNfGas100EDFeTiposBasicosV100IsTot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor Total do Imposto Seletivo
     */
    public vIS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100IsTot instance.
     * Schema context: Grupo de informações de totais do Imposto Seletivo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100IsTot) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100IsTot";


        if (props) {

        	this.vIS = props.vIS;
        }
    }
}
