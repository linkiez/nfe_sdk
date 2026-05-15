import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
