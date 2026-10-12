import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100ENfgasTiposBasicoV100GCons } from './CPlNfGas100ENfgasTiposBasicoV100GCons';

/**
 * Histórico de Consumo
 */
export class CPlNfGas100ENfgasTiposBasicoV100GHistCons {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Consumo
     */
    public gCons?: CPlNfGas100ENfgasTiposBasicoV100GCons;
    /**
     * Média Mensal de consumo
     */
    public medMensal?: unknown;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100GHistCons instance.
     * Schema context: Histórico de Consumo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GHistCons) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GHistCons";


        if (props) {

        	this.gCons = (props.gCons) ? new CPlNfGas100ENfgasTiposBasicoV100GCons(props.gCons): undefined;
            assignSchemaProperties(this, props, ["medMensal"]);
        }
    }
}
