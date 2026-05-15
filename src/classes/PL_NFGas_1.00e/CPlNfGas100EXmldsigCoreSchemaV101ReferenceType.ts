import { CPlNfGas100EXmldsigCoreSchemaV101TransformsType } from './CPlNfGas100EXmldsigCoreSchemaV101TransformsType';

import { TPlNfGas100EXmldsigCoreSchemaV101DigestValueType } from '../../types/PL_NFGas_1.00e/TPlNfGas100EXmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CPlNfGas100EXmldsigCoreSchemaV101ReferenceType.
 */
export class CPlNfGas100EXmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CPlNfGas100EXmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TPlNfGas100EXmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CPlNfGas100EXmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CPlNfGas100EXmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CPlNfGas100EXmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
