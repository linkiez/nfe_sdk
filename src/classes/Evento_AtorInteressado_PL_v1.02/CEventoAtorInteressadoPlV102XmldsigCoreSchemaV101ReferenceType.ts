import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType';

import { TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
            assignSchemaProperties(this, props, ["DigestValue", "$Id", "$URI", "$Type"]);
        }
    }
}
