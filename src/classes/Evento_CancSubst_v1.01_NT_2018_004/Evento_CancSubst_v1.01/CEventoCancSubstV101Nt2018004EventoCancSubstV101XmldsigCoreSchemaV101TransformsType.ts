import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
