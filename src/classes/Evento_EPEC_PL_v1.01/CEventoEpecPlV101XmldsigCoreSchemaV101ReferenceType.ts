import { CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoEpecPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoEpecPlV101XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
