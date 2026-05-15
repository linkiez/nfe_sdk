import { CPlNfGas100ENfgasTiposBasicoV100GHistCons } from './CPlNfGas100ENfgasTiposBasicoV100GHistCons';

/**
 * Grupo de informações da Agência reguladora Obrigatorio para tpFat 1 e 2 (normal e agregada) Vedado para tpFat 3 (agregadora)
 */
export class CPlNfGas100ENfgasTiposBasicoV100GAgencia {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Histórico de Consumo
     */
    public gHistCons?: CPlNfGas100ENfgasTiposBasicoV100GHistCons;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100GAgencia instance.
     * Schema context: Grupo de informações da Agência reguladora Obrigatorio para tpFat 1 e 2 (normal e agregada) Vedado para tpFat 3 (agregadora)
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GAgencia) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GAgencia";


        if (props) {

        	this.gHistCons = (props.gHistCons) ? new CPlNfGas100ENfgasTiposBasicoV100GHistCons(props.gHistCons): undefined;
        }
    }
}
