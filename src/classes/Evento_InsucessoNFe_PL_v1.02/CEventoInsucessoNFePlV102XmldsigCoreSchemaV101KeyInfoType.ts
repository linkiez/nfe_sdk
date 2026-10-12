import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType.
 */
export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
            assignSchemaProperties(this, props, ["$Id"]);
        }
    }
}
