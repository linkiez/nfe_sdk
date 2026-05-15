import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais do Imposto Seletivo
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100IsTot {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor Total do Imposto Seletivo
     */
    public vIS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100IsTot instance.
     * Schema context: Grupo de informações de totais do Imposto Seletivo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100IsTot) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100IsTot";


        if (props) {

        	this.vIS = props.vIS;
        }
    }
}
