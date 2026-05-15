import { CPl010CNt2022002V130LeiauteNFeV400Lacres } from './CPl010CNt2022002V130LeiauteNFeV400Lacres';

/**
 * Dados dos volumes
 */
export class CPl010CNt2022002V130LeiauteNFeV400Vol {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Peso líquido (em kg)
     */
    public pesoL?: unknown;
    /**
     * Peso bruto (em kg)
     */
    public pesoB?: unknown;
    /**
     * Número dos Lacres
     */
    public lacres?: CPl010CNt2022002V130LeiauteNFeV400Lacres;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Vol instance.
     * Schema context: Dados dos volumes
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Vol) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Vol";


        if (props) {

        	this.pesoL = props.pesoL;
        	this.pesoB = props.pesoB;
        	this.lacres = (props.lacres) ? new CPl010CNt2022002V130LeiauteNFeV400Lacres(props.lacres): undefined;
        }
    }
}
