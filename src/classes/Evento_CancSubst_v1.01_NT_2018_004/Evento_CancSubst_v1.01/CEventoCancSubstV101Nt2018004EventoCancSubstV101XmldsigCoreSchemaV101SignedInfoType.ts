import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
