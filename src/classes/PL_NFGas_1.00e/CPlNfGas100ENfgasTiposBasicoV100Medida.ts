import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100ENfgasTiposBasicoV100UMed } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100UMed';

/**
 * Tipo de dados de medida
 */
export class CPlNfGas100ENfgasTiposBasicoV100Medida {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Unidade Básica de Medida 1 –m3
     */
    public uMed?: TPlNfGas100ENfgasTiposBasicoV100UMed;
    /**
     * Valor da medição (vMedAtu – vMedAnt)
     */
    public vMed?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100Medida instance.
     * Schema context: Tipo de dados de medida
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Medida) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Medida";


        if (props) {

            assignSchemaProperties(this, props, ["uMed", "vMed"]);
        }
    }
}
