/**
 * Detalhamento de Produtos e Serviços
 */
export class CPlNfGas100ENfgasTiposBasicoV100Det {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    //choice

    /**
     * Informar se faturamento normal (1) ou agregado (2)
     * @param arg - Branch value assigned to gNormal.
     */
    public gNormal(arg: unknown) {
        delete((this as any).gAgregadora);
        (this as any).gNormal = arg;
    }

    //choice

    /**
     * Informar para faturamento agregador (3)
     * @param arg - Branch value assigned to gAgregadora.
     */
    public gAgregadora(arg: unknown) {
        delete((this as any).gNormal);
        (this as any).gAgregadora = arg;
    }

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100Det instance.
     * Schema context: Detalhamento de Produtos e Serviços
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Det) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Det";
    }
}
