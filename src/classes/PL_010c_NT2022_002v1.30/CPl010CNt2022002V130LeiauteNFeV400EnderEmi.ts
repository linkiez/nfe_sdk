/**
 * Tipo Dados do Endereço do Emitente // 24/10/08 - desmembrado / tamanho mínimo
 */
export class CPl010CNt2022002V130LeiauteNFeV400EnderEmi {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do município
     */
    public cMun?: unknown;
    /**
     * Sigla da UF
     */
    public UF?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400EnderEmi instance.
     * Schema context: Tipo Dados do Endereço do Emitente // 24/10/08 - desmembrado / tamanho mínimo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400EnderEmi) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400EnderEmi";


        if (props) {

        	this.cMun = props.cMun;
        	this.UF = props.UF;
        }
    }
}
