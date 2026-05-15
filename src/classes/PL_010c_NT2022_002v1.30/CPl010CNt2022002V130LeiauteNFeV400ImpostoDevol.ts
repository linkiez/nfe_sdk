import { CPl010CNt2022002V130LeiauteNFeV400Ipi } from './CPl010CNt2022002V130LeiauteNFeV400Ipi';

/**
 * Percentual de mercadoria devolvida
 */
export class CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual de mercadoria devolvida
     */
    public pDevol?: unknown;
    /**
     * Informação de IPI devolvido
     */
    public CPl010CNt2022002V130LeiauteNFeV400Ipi?: CPl010CNt2022002V130LeiauteNFeV400Ipi;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol instance.
     * Schema context: Percentual de mercadoria devolvida
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol";


        if (props) {

        	this.pDevol = props.pDevol;
        	this.CPl010CNt2022002V130LeiauteNFeV400Ipi = (props.CPl010CNt2022002V130LeiauteNFeV400Ipi) ? new CPl010CNt2022002V130LeiauteNFeV400Ipi(props.CPl010CNt2022002V130LeiauteNFeV400Ipi): undefined;
        }
    }
}
