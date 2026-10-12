import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoInsucessoNFePlV102XmldsigCoreSchemaV101Signature } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101.
 */
export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoInsucessoNFePlV102XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101";


        if (props) {

            assignSchemaProperties(this, props, ["signature"]);
        }
    }
}
