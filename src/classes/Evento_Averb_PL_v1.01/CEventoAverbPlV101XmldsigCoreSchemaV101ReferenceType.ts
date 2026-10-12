import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoAverbPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoAverbPlV101XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
            assignSchemaProperties(this, props, ["DigestValue", "$Id", "$URI", "$Type"]);
        }
    }
}
