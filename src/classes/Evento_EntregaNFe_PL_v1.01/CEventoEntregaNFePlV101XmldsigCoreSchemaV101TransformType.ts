import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType.
 */
export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

            assignSchemaProperties(this, props, ["XPath", "$Algorithm"]);
        }
    }
}
