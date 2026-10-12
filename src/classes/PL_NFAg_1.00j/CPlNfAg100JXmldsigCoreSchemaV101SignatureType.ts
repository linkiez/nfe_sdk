import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType } from './CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType';

import { CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType } from './CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType';

import { CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType } from './CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CPlNfAg100JXmldsigCoreSchemaV101SignatureType.
 */
export class CPlNfAg100JXmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CPlNfAg100JXmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CPlNfAg100JXmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
