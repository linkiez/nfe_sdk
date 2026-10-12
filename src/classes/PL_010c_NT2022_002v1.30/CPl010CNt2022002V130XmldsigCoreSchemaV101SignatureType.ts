import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType';

import { CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType';

import { CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType.
 */
export class CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
