import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Schema XML de validação do evento do cancelamento 110111
 */
export class CPlNfAg100JEvCancNfAgV100EvCancNfAg {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Número do Protocolo de Status da NFAg.
     */
    public nProt?: unknown;
    /**
     * Justificativa do Cancelamento
     */
    public xJust?: unknown;

    /**
     * Creates a new schema-backed CPlNfAg100JEvCancNfAgV100EvCancNfAg instance.
     * Schema context: Schema XML de validação do evento do cancelamento 110111
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JEvCancNfAgV100EvCancNfAg) {
        this["@class"] = ".CPlNfAg100JEvCancNfAgV100EvCancNfAg";


        if (props) {

            assignSchemaProperties(this, props, ["nProt", "xJust"]);
        }
    }
}
