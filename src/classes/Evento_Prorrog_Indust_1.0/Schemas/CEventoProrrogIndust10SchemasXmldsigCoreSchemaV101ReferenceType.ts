import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType';

import { TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101DigestValueType } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
