import { CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoAverbPlV101XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoAverbPlV101XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoAverbPlV101XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoAverbPlV101XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
