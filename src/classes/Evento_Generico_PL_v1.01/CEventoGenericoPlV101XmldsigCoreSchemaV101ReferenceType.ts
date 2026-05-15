import { CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoGenericoPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoGenericoPlV101XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
