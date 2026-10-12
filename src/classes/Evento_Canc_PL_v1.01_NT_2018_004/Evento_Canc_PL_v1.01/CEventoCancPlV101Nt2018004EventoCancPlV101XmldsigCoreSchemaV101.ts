import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101Signature } from '../../../types/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101.
 */
export class CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101";


        if (props) {

            assignSchemaProperties(this, props, ["signature"]);
        }
    }
}
