import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100ENfgasTiposBasicoV100Compet } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Compet';

import { TPlNfGas100ENfgasTiposBasicoV100UMed } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100UMed';

/**
 * Consumo
 */
export class CPlNfGas100ENfgasTiposBasicoV100GCons {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Ano e mês referência do faturamento (AAAAMM)
     */
    public CompetFat?: TPlNfGas100ENfgasTiposBasicoV100Compet;
    /**
     * Unidade Básica de Medida 1 - m3
     */
    public uMed?: TPlNfGas100ENfgasTiposBasicoV100UMed;
    /**
     * Média Diária de consumo
     */
    public medDiaria?: unknown;
    /**
     * Consumo no mês
     */
    public consumo?: unknown;
    /**
     * Valor Faturado
     */
    public vFat?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100GCons instance.
     * Schema context: Consumo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GCons) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GCons";


        if (props) {

            assignSchemaProperties(this, props, ["CompetFat", "uMed", "medDiaria", "consumo", "vFat"]);
        }
    }
}
