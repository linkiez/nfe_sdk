import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informar a chave da nota (NFe ou NFCe) emitida para o fornecimento nos casos em que a legislação obriga a emissão de documento fiscal.
 */
export class CEventosRtcE211120V100DFeReferenciado {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informar a chave da nota (NFe ou NFCe) emitida para o fornecimento nos casos em que a legislação obriga a emissão de documento fiscal.
     */
    public chaveAcesso?: unknown;
    /**
     * Corresponde ao atributo “nItem” do elemento “det” do documento referenciado
     */
    public nItem?: unknown;

    /**
     * Creates a new schema-backed CEventosRtcE211120V100DFeReferenciado instance.
     * Schema context: Informar a chave da nota (NFe ou NFCe) emitida para o fornecimento nos casos em que a legislação obriga a emissão de documento fiscal.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211120V100DFeReferenciado) {
        this["@class"] = ".CEventosRtcE211120V100DFeReferenciado";


        if (props) {

            assignSchemaProperties(this, props, ["chaveAcesso", "nItem"]);
        }
    }
}
