import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
