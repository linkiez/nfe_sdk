import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
