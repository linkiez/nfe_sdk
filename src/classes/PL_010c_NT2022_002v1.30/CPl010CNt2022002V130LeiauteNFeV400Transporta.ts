/**
 * Dados do transportador
 */
export class CPl010CNt2022002V130LeiauteNFeV400Transporta {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Inscrição Estadual (v2.0)
     */
    public IE?: unknown;
    /**
     * Sigla da UF
     */
    public UF?: unknown;

    //choice

    /**
     * CNPJ do transportador
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * CPF do transportador
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Transporta instance.
     * Schema context: Dados do transportador
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Transporta) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Transporta";


        if (props) {

        	this.IE = props.IE;
        	this.UF = props.UF;
        }
    }
}
