import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
