import { CPl010CNt2022002V130LeiauteNFeV400Endereco } from './CPl010CNt2022002V130LeiauteNFeV400Endereco';

/**
 * Identificação do Destinatário
 */
export class CPl010CNt2022002V130LeiauteNFeV400Dest {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Dados do endereço
     */
    public enderDest?: CPl010CNt2022002V130LeiauteNFeV400Endereco;
    /**
     * Inscrição Estadual (obrigatório nas operações com contribuintes do ICMS)
     */
    public IE?: unknown;

    //choice

    /**
     * Número do CNPJ
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * Número do CPF
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Dest instance.
     * Schema context: Identificação do Destinatário
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Dest) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Dest";


        if (props) {

        	this.enderDest = (props.enderDest) ? new CPl010CNt2022002V130LeiauteNFeV400Endereco(props.enderDest): undefined;
        	this.IE = props.IE;
        }
    }
}
