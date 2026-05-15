import { CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoCCePlV101XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoCCePlV101XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoCCePlV101XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoCCePlV101XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
