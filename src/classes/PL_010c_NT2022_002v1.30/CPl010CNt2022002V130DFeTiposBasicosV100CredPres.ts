import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Crédito Presumido
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100CredPres {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual do Crédito Presumido
     */
    public pCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;

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
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100CredPres instance.
     * Schema context: Tipo Crédito Presumido
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100CredPres) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100CredPres";


        if (props) {

        	this.pCredPres = props.pCredPres;
        }
    }
}
