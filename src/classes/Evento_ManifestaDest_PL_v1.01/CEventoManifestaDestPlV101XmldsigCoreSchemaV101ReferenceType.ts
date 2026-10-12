import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoManifestaDestPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoManifestaDestPlV101XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
            assignSchemaProperties(this, props, ["DigestValue", "$Id", "$URI", "$Type"]);
        }
    }
}
