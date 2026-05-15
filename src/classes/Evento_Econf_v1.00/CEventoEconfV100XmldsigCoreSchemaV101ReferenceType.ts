import { CEventoEconfV100XmldsigCoreSchemaV101TransformsType } from './CEventoEconfV100XmldsigCoreSchemaV101TransformsType';

import { TEventoEconfV100XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_Econf_v1.00/TEventoEconfV100XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoEconfV100XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoEconfV100XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoEconfV100XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoEconfV100XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoEconfV100XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoEconfV100XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoEconfV100XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
