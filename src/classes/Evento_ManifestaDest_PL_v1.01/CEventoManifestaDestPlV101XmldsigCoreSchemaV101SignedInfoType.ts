import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
