import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEconfV100XmldsigCoreSchemaV101ReferenceType } from './CEventoEconfV100XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoEconfV100XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoEconfV100XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
