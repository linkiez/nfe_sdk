import { CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType } from './CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType } from './CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType } from './CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoEconfV100XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoEconfV100XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEconfV100XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoEconfV100XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
