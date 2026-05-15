import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101X509DataType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType.
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
