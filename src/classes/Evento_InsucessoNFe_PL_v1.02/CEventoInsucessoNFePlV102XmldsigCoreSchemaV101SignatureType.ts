import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType';

import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType';

import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType.
 */
export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Signed Info.
     */
    public SignedInfo?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType;
    /**
     * Schema property Signature Value.
     */
    public SignatureValue?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType;
    /**
     * Schema property Key Info.
     */
    public KeyInfo?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
