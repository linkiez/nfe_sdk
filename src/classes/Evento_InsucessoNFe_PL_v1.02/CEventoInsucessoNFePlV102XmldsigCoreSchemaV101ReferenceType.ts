import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType';

import { TEventoInsucessoNFePlV102XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoInsucessoNFePlV102XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
            assignSchemaProperties(this, props, ["DigestValue", "$Id", "$URI", "$Type"]);
        }
    }
}
