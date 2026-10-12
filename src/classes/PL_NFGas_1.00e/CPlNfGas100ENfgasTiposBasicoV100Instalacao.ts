import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100ENfgasTiposBasicoV100Classe } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Classe';

import { TPlNfGas100ENfgasTiposBasicoV100Ligacao } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Ligacao';

/**
 * Dados da Instalação OPCIONAL para TpFat=3
 */
export class CPlNfGas100ENfgasTiposBasicoV100Instalacao {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo de Instalação 1 - Cativo 2 - Livre 3 - Parcialmente Livre
     */
    public tpInstalacao?: TPlNfGas100ENfgasTiposBasicoV100Ligacao;
    /**
     * Classe de Consumo da Instalação 01 - Comercial 02 - Industrial 03 - Residencial 04 - Térmico 05 - Veicular Posto 06 - Veicular Frota 07 - GNC 08 - GNL 09 - Cogeração 10 - Refinaria 99 - Outros
     */
    public tpClasse?: TPlNfGas100ENfgasTiposBasicoV100Classe;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100Instalacao instance.
     * Schema context: Dados da Instalação OPCIONAL para TpFat=3
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Instalacao) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Instalacao";


        if (props) {

            assignSchemaProperties(this, props, ["tpInstalacao", "tpClasse"]);
        }
    }
}
