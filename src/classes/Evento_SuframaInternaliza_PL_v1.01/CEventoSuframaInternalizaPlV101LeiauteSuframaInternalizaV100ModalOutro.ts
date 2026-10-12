import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Runtime class for CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalOutro.
 */
export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalOutro {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property tp Modal.
     */
    public tpModal?: unknown;
    /**
     * Schema property x Ident.
     */
    public xIdent?: unknown;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalOutro instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalOutro.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalOutro) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalOutro";


        if (props) {

            assignSchemaProperties(this, props, ["tpModal", "xIdent"]);
        }
    }
}
