import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType.
 */
export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

            assignSchemaProperties(this, props, ["XPath", "$Algorithm"]);
        }
    }
}
