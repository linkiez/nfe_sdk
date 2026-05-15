import { CPlNfAg100JNfagTiposBasicoV100GAnalise } from './CPlNfAg100JNfagTiposBasicoV100GAnalise';

import { TPlNfAg100JNfagTiposBasicoV100Compet } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Compet';

/**
 * Informações sobre a qualidade de água
 */
export class CPlNfAg100JNfagTiposBasicoV100GQualiAgua {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Ano e mês referência da analise (AAAAMM)
     */
    public CompetAnalise?: TPlNfAg100JNfagTiposBasicoV100Compet;
    /**
     * Grupo de informações da Análise
     */
    public gAnalise?: CPlNfAg100JNfagTiposBasicoV100GAnalise;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GQualiAgua instance.
     * Schema context: Informações sobre a qualidade de água
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GQualiAgua) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GQualiAgua";


        if (props) {

        	this.CompetAnalise = props.CompetAnalise;
        	this.gAnalise = (props.gAnalise) ? new CPlNfAg100JNfagTiposBasicoV100GAnalise(props.gAnalise): undefined;
        }
    }
}
