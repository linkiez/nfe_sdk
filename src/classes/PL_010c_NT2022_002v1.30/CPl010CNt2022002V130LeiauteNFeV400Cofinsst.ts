/**
 * Dados do COFINS da Substituição Tributaria;
 */
export class CPl010CNt2022002V130LeiauteNFeV400Cofinsst {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do COFINS ST
     */
    public vCOFINS?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Cofinsst instance.
     * Schema context: Dados do COFINS da Substituição Tributaria;
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Cofinsst) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Cofinsst";


        if (props) {

        	this.vCOFINS = props.vCOFINS;
        }
    }
}
