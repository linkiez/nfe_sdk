import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoEntregaNFePlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoEntregaNFePlV101XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
            assignSchemaProperties(this, props, ["DigestValue", "$Id", "$URI", "$Type"]);
        }
    }
}
