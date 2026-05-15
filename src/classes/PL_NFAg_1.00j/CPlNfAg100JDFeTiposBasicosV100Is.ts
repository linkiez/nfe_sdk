import { TPlNfAg100JDFeTiposBasicosV100Cst } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações do Imposto Seletivo
 */
export class CPlNfAg100JDFeTiposBasicosV100Is {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código Situação Tributária do Imposto Seletivo
     */
    public CSTIS?: TPlNfAg100JDFeTiposBasicosV100Cst;
    /**
     * Código de Classificação Tributária do IBS e da CBS
     */
    public cClassTribIS?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100Is instance.
     * Schema context: Grupo de informações do Imposto Seletivo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Is) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Is";


        if (props) {

        	this.CSTIS = props.CSTIS;
        	this.cClassTribIS = props.cClassTribIS;
        }
    }
}
