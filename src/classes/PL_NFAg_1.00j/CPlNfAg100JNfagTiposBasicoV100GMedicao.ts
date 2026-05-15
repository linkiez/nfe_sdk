import { CPlNfAg100JNfagTiposBasicoV100MedidaAg } from './CPlNfAg100JNfagTiposBasicoV100MedidaAg';

import { TPlNfAg100JNfagTiposBasicoV100MotNaoLeitura } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100MotNaoLeitura';

/**
 * Grupo para referenciar qual medição e medida estão relacionadas ao item
 */
export class CPlNfAg100JNfagTiposBasicoV100GMedicao {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    //choice

    /**
     * Selects the g medida branch for this schema choice.
     * @param arg - Branch value assigned to gMedida.
     */
    public gMedida(arg: unknown) {
        delete((this as any).tpMotNaoLeitura);
        (this as any).gMedida = arg;
    }

    //choice

    /**
     * Tipo Motivo da não leitura 1 - Consumidor; 2 - Distribuidora; 3 - Independente do Consumidor e distribuidora;
     * @param arg - Branch value assigned to tpMotNaoLeitura.
     */
    public tpMotNaoLeitura(arg: unknown) {
        delete((this as any).gMedida);
        (this as any).tpMotNaoLeitura = arg;
    }

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GMedicao instance.
     * Schema context: Grupo para referenciar qual medição e medida estão relacionadas ao item
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GMedicao) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GMedicao";
    }
}
