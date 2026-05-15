import { CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoEpecPlV101XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEpecPlV101XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
