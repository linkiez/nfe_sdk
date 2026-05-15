import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
