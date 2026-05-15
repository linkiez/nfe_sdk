import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType';

import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType';

import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType.
 */
export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
