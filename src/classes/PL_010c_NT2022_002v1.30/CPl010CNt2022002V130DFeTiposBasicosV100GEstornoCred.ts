import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Totalização do estorno de crédito
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor total do IBS estornado
     */
    public vIBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    /**
     * Valor total da CBS estornada
     */
    public vCBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred instance.
     * Schema context: Totalização do estorno de crédito
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred";


        if (props) {

        	this.vIBSEstCred = props.vIBSEstCred;
        	this.vCBSEstCred = props.vCBSEstCred;
        }
    }
}
