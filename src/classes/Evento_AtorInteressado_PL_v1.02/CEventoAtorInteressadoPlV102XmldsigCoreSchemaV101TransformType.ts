import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType.
 */
export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property XPath.
     */
    public XPath?: string;
    /**
     * Schema attribute algorithm.
     */
    public $Algorithm?: TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType";


        if (props) {

            assignSchemaProperties(this, props, ["XPath", "$Algorithm"]);
        }
    }
}
