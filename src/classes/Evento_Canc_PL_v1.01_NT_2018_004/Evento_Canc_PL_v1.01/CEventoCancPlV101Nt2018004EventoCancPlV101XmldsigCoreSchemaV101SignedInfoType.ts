import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
