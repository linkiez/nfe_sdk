import { TPlNfGas100ENfgasTiposBasicoV100MotSub } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100MotSub';

/**
 * Grupo de informações da substituição
 */
export class CPlNfGas100ENfgasTiposBasicoV100GSub {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Motivo Substituição
     */
    public motSub?: TPlNfGas100ENfgasTiposBasicoV100MotSub;

    //choice

    /**
     * Chave de acesso da NFGas referenciada
     * @param arg - Branch value assigned to chNFGas.
     */
    public chNFGas(arg: unknown) {
        delete((this as any).gNF);
        (this as any).chNFGas = arg;
    }

    //choice

    /**
     * Informação da NF em papel referenciada
     * @param arg - Branch value assigned to gNF.
     */
    public gNF(arg: unknown) {
        delete((this as any).chNFGas);
        (this as any).gNF = arg;
    }

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100GSub instance.
     * Schema context: Grupo de informações da substituição
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GSub) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GSub";


        if (props) {

        	this.motSub = props.motSub;
        }
    }
}
