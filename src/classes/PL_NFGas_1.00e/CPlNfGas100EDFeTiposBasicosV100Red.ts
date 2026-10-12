import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

/**
 * Tipo Redução Base de Cálculo
 */
export class CPlNfGas100EDFeTiposBasicosV100Red {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual de redução de aliquota do cClassTrib
     */
    public pRedAliq?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Aliquota Efetiva que será aplicada a Base de Calculo (em percentual)
     */
    public pAliqEfet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100Red instance.
     * Schema context: Tipo Redução Base de Cálculo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Red) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Red";


        if (props) {

            assignSchemaProperties(this, props, ["pRedAliq", "pAliqEfet"]);
        }
    }
}
