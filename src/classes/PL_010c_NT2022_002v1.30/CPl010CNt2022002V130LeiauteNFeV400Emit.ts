import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130LeiauteNFeV400EnderEmi } from './CPl010CNt2022002V130LeiauteNFeV400EnderEmi';

/**
 * Identificação do emitente
 */
export class CPl010CNt2022002V130LeiauteNFeV400Emit {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Endereço do emitente
     */
    public enderEmit?: CPl010CNt2022002V130LeiauteNFeV400EnderEmi;
    /**
     * Inscrição Estadual do Emitente
     */
    public IE?: unknown;
    /**
     * Inscricao Estadual do Substituto Tributário
     */
    public IEST?: unknown;

    //choice

    /**
     * Número do CNPJ do emitente
     * @param arg - Branch value assigned to CNPJ.
     */
    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    /**
     * Número do CPF do emitente
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Emit instance.
     * Schema context: Identificação do emitente
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Emit) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Emit";


        if (props) {

        	this.enderEmit = (props.enderEmit) ? new CPl010CNt2022002V130LeiauteNFeV400EnderEmi(props.enderEmit): undefined;
            assignSchemaProperties(this, props, ["IE", "IEST"]);
        }
    }
}
