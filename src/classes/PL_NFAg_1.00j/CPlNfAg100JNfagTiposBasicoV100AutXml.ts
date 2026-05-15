/**
 * Autorizados para download do XML do DF-e
 */
export class CPlNfAg100JNfagTiposBasicoV100AutXml {
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
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100AutXml instance.
     * Schema context: Autorizados para download do XML do DF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100AutXml) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100AutXml";
    }
}
