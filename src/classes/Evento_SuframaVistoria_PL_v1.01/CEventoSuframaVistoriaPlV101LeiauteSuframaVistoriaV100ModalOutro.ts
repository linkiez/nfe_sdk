/**
 * Runtime class for CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalOutro.
 */
export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalOutro {
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
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalOutro instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalOutro.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalOutro) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalOutro";


        if (props) {

        	this.tpModal = props.tpModal;
        	this.xIdent = props.xIdent;
        }
    }
}
