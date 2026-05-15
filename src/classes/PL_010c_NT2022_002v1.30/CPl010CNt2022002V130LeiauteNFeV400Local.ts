/**
 * Tipo Dados do Local de Retirada ou Entrega // 24/10/08 - tamanho mínimo // v2.0
 */
export class CPl010CNt2022002V130LeiauteNFeV400Local {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do município (utilizar a tabela do IBGE)
     */
    public cMun?: unknown;
    /**
     * Sigla da UF
     */
    public UF?: unknown;
    /**
     * Inscrição Estadual (v2.0)
     */
    public IE?: unknown;

    //choice

    /**
     * CNPJ
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * CPF (v2.0)
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Local instance.
     * Schema context: Tipo Dados do Local de Retirada ou Entrega // 24/10/08 - tamanho mínimo // v2.0
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Local) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Local";


        if (props) {

        	this.cMun = props.cMun;
        	this.UF = props.UF;
        	this.IE = props.IE;
        }
    }
}
