import { CPlNfAg100JXmldsigCoreSchemaV101TransformsType } from './CPlNfAg100JXmldsigCoreSchemaV101TransformsType';

import { TPlNfAg100JXmldsigCoreSchemaV101DigestValueType } from '../../types/PL_NFAg_1.00j/TPlNfAg100JXmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CPlNfAg100JXmldsigCoreSchemaV101ReferenceType.
 */
export class CPlNfAg100JXmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CPlNfAg100JXmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TPlNfAg100JXmldsigCoreSchemaV101DigestValueType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;
    /**
     * Schema attribute uri.
     */
    public $URI?: any;
    /**
     * Schema attribute type.
     */
    public $Type?: string;

    /**
     * Creates a new schema-backed CPlNfAg100JXmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CPlNfAg100JXmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CPlNfAg100JXmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
