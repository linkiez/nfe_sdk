import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
