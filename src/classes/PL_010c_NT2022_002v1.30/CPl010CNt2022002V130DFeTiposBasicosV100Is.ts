import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações do Imposto Seletivo
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100Is {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código Situação Tributária do Imposto Seletivo
     */
    public CSTIS?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
    /**
     * Código de Classificação Tributária do IBS e da CBS
     */
    public cClassTribIS?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100Is instance.
     * Schema context: Grupo de informações do Imposto Seletivo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Is) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Is";


        if (props) {

        	this.CSTIS = props.CSTIS;
        	this.cClassTribIS = props.cClassTribIS;
        }
    }
}
