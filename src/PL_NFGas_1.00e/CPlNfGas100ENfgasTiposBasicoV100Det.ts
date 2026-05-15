export interface IPlNfGas100ENfgasTiposBasicoV100Det {
  "@class"?: string;
}

export class CPlNfGas100ENfgasTiposBasicoV100Det {
    public "@class"?: string;

    //choice

    public gNormal(arg: unknown) {
        delete((this as any).gAgregadora);
        (this as any).gNormal = arg;
    }

    //choice

    public gAgregadora(arg: unknown) {
        delete((this as any).gNormal);
        (this as any).gAgregadora = arg;
    }

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Det) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Det";
    }
}
