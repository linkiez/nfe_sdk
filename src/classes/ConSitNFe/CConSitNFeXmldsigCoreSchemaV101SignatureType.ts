import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CConSitNFeXmldsigCoreSchemaV101KeyInfoType } from './CConSitNFeXmldsigCoreSchemaV101KeyInfoType';

import { CConSitNFeXmldsigCoreSchemaV101SignatureValueType } from './CConSitNFeXmldsigCoreSchemaV101SignatureValueType';

import { CConSitNFeXmldsigCoreSchemaV101SignedInfoType } from './CConSitNFeXmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CConSitNFeXmldsigCoreSchemaV101SignatureType.
 */
export class CConSitNFeXmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CConSitNFeXmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CConSitNFeXmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CConSitNFeXmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CConSitNFeXmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CConSitNFeXmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeXmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CConSitNFeXmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CConSitNFeXmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CConSitNFeXmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CConSitNFeXmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
