import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
