import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informado para abater as parcelas de antecipação de pagamento, conforme Art. 10. § 4º
 */
export class CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Chave de acesso da NF-e de antecipação de pagamento
     */
    public refNFe?: unknown;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado instance.
     * Schema context: Informado para abater as parcelas de antecipação de pagamento, conforme Art. 10. § 4º
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400GPagAntecipado";


        if (props) {

            assignSchemaProperties(this, props, ["refNFe"]);
        }
    }
}
