import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Crédito Presumido
 */
export class CPlNfGas100EDFeTiposBasicosV100CredPres {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual do Crédito Presumido
     */
    public pCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;

    //choice

    /**
     * Valor do Crédito Presumido
     * @param arg - Branch value assigned to vCredPres.
     */
    public vCredPres(arg: unknown) {
        delete((this as any).vCredPresCondSus);
        (this as any).vCredPres = arg;
    }

    //choice

    /**
     * Valor do Crédito Presumido Condição Suspensiva, preencher apenas para cCredPres que possui indicação de Condição Suspensiva
     * @param arg - Branch value assigned to vCredPresCondSus.
     */
    public vCredPresCondSus(arg: unknown) {
        delete((this as any).vCredPres);
        (this as any).vCredPresCondSus = arg;
    }

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100CredPres instance.
     * Schema context: Tipo Crédito Presumido
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100CredPres) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100CredPres";


        if (props) {

            assignSchemaProperties(this, props, ["pCredPres"]);
        }
    }
}
