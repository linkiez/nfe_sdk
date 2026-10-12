import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Sigla da UF do destinatário.
 */
export class CEventoEpecNfCePl100EventoEpecV001Dest {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Sigla da UF do destinatário.
     */
    public UF?: unknown;

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
     * CPF
     * @param arg - Branch value assigned to CPF.
     */
    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100EventoEpecV001Dest instance.
     * Schema context: Sigla da UF do destinatário.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001Dest) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001Dest";


        if (props) {

            assignSchemaProperties(this, props, ["UF"]);
        }
    }
}
