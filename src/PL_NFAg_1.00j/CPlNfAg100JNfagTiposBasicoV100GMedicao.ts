import { CPlNfAg100JNfagTiposBasicoV100MedidaAg } from './CPlNfAg100JNfagTiposBasicoV100MedidaAg';

import { TPlNfAg100JNfagTiposBasicoV100MotNaoLeitura } from './TPlNfAg100JNfagTiposBasicoV100MotNaoLeitura';

export interface IPlNfAg100JNfagTiposBasicoV100GMedicao {
  "@class"?: string;
}

export class CPlNfAg100JNfagTiposBasicoV100GMedicao {
    public "@class"?: string;

    //choice

    public gMedida(arg: unknown) {
        delete((this as any).tpMotNaoLeitura);
        (this as any).gMedida = arg;
    }

    //choice

    public tpMotNaoLeitura(arg: unknown) {
        delete((this as any).gMedida);
        (this as any).tpMotNaoLeitura = arg;
    }

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GMedicao) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GMedicao";
    }
}
