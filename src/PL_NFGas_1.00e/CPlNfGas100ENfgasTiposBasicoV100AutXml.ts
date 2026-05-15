export interface IPlNfGas100ENfgasTiposBasicoV100AutXml {
  "@class"?: string;
}

export class CPlNfGas100ENfgasTiposBasicoV100AutXml {
    public "@class"?: string;

    //choice

    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100AutXml) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100AutXml";
    }
}
