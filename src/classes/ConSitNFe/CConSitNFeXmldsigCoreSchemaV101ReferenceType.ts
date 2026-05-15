import { CConSitNFeXmldsigCoreSchemaV101TransformsType } from './CConSitNFeXmldsigCoreSchemaV101TransformsType';

import { TConSitNFeXmldsigCoreSchemaV101DigestValueType } from '../../types/ConSitNFe/TConSitNFeXmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CConSitNFeXmldsigCoreSchemaV101ReferenceType.
 */
export class CConSitNFeXmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CConSitNFeXmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TConSitNFeXmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CConSitNFeXmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CConSitNFeXmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeXmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CConSitNFeXmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CConSitNFeXmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
