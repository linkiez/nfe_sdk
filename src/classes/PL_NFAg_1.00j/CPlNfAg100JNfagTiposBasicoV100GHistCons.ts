import { CPlNfAg100JNfagTiposBasicoV100GCons } from './CPlNfAg100JNfagTiposBasicoV100GCons';

/**
 * Histórico de Consumo
 */
export class CPlNfAg100JNfagTiposBasicoV100GHistCons {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Consumo
     */
    public gCons?: CPlNfAg100JNfagTiposBasicoV100GCons;
    /**
     * Média Mensal de consumo
     */
    public medMensal?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100GHistCons instance.
     * Schema context: Histórico de Consumo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GHistCons) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GHistCons";


        if (props) {

        	this.gCons = (props.gCons) ? new CPlNfAg100JNfagTiposBasicoV100GCons(props.gCons): undefined;
        	this.medMensal = props.medMensal;
        }
    }
}
