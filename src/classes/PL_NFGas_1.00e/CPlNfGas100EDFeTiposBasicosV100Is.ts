import { TPlNfGas100EDFeTiposBasicosV100Cst } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações do Imposto Seletivo
 */
export class CPlNfGas100EDFeTiposBasicosV100Is {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código Situação Tributária do Imposto Seletivo
     */
    public CSTIS?: TPlNfGas100EDFeTiposBasicosV100Cst;
    /**
     * Código de Classificação Tributária do IBS e da CBS
     */
    public cClassTribIS?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100Is instance.
     * Schema context: Grupo de informações do Imposto Seletivo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Is) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Is";


        if (props) {

        	this.CSTIS = props.CSTIS;
        	this.cClassTribIS = props.cClassTribIS;
        }
    }
}
