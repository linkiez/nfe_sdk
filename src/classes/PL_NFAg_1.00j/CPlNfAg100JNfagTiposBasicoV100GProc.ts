import { TPlNfAg100JNfagTiposBasicoV100ProcessoAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100ProcessoAg';

/**
 * Grupo identificador do Processo
 */
export class CPlNfAg100JNfagTiposBasicoV100GProc {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo de Processo 0 - Processo Adm Estadual; 1 - Justiça Federal; 2 - Justiça Estadual; 3 - Processo Adm Municipal; 4 - Processo Adm Federal; 5 - Procon
     */
    public tpProc?: TPlNfAg100JNfagTiposBasicoV100ProcessoAg;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GProc instance.
     * Schema context: Grupo identificador do Processo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GProc) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GProc";


        if (props) {

        	this.tpProc = props.tpProc;
        }
    }
}
