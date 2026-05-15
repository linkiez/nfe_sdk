import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
