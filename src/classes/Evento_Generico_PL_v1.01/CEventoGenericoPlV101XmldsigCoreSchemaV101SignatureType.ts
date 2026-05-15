import { CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
