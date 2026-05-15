export interface IPlNfAg100JNfagTiposBasicoV100AutXml {
  "@class"?: string;
}

export class CPlNfAg100JNfagTiposBasicoV100AutXml {
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

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100AutXml) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100AutXml";
    }
}
