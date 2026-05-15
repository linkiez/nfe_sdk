/**
 * Informações de exportação
 */
export class CPl010CNt2022002V130LeiauteNFeV400Exporta {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Sigla da UF de Embarque ou de transposição de fronteira
     */
    public UFSaidaPais?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Exporta instance.
     * Schema context: Informações de exportação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Exporta) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Exporta";


        if (props) {

        	this.UFSaidaPais = props.UFSaidaPais;
        }
    }
}
