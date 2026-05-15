/**
 * Autorizados para download do XML do DF-e
 */
export class CPlNfGas100ENfgasTiposBasicoV100AutXml {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    //choice

    /**
     * CNPJ do autorizado Informar zeros não significativos
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * CPF do autorizado Informar zeros não significativos
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100AutXml instance.
     * Schema context: Autorizados para download do XML do DF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100AutXml) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100AutXml";
    }
}
