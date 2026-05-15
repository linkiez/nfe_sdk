import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
