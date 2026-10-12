import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JNfagTiposBasicoV100Ligacao } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Ligacao';

/**
 * Dados da Ligação
 */
export class CPlNfAg100JNfagTiposBasicoV100Ligacao {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo de Ligação 1 - Agua 2 - Esgoto 3 - Agua e esgoto
     */
    public tpLigacao?: TPlNfAg100JNfagTiposBasicoV100Ligacao;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100Ligacao instance.
     * Schema context: Dados da Ligação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Ligacao) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Ligacao";


        if (props) {

            assignSchemaProperties(this, props, ["tpLigacao"]);
        }
    }
}
