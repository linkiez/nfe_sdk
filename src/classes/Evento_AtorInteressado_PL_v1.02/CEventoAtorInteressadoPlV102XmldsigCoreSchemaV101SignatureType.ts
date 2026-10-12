import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType';

import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType';

import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
