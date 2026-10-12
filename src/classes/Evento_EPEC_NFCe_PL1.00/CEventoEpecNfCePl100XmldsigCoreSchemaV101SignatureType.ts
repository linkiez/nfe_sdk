import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
