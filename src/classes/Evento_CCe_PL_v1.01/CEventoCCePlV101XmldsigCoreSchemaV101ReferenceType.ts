import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoCCePlV101XmldsigCoreSchemaV101TransformsType } from './CEventoCCePlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoCCePlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoCCePlV101XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoCCePlV101XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoCCePlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
            assignSchemaProperties(this, props, ["DigestValue", "$Id", "$URI", "$Type"]);
        }
    }
}
