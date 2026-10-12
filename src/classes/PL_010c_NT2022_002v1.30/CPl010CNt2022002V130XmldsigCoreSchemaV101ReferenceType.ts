import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType';

import { TPl010CNt2022002V130XmldsigCoreSchemaV101DigestValueType } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType.
 */
export class CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TPl010CNt2022002V130XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
            assignSchemaProperties(this, props, ["DigestValue", "$Id", "$URI", "$Type"]);
        }
    }
}
