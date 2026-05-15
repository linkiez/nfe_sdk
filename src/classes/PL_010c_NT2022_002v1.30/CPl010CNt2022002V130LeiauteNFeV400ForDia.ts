/**
 * Fornecimentos diários
 */
export class CPl010CNt2022002V130LeiauteNFeV400ForDia {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Quantidade em quilogramas - peso líquido
     */
    public qtde?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400ForDia instance.
     * Schema context: Fornecimentos diários
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ForDia) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ForDia";


        if (props) {

        	this.qtde = props.qtde;
        }
    }
}
