import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101DigestValueType } from '../../../types/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
