import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType } from './CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType';

import { CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType } from './CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType';

import { CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType } from './CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CPlNfGas100EXmldsigCoreSchemaV101SignatureType.
 */
export class CPlNfGas100EXmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CPlNfGas100EXmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CPlNfGas100EXmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
