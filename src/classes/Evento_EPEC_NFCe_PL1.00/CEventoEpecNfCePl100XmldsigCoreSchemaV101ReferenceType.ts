import { CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType';

import { TEventoEpecNfCePl100XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoEpecNfCePl100XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
