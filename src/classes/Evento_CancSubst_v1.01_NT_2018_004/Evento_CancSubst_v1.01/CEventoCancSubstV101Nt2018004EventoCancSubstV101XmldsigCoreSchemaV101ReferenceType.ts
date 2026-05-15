import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType';

import { TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101DigestValueType } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType.
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transforms.
     */
    public Transforms?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType;
    /**
     * Schema property Digest Value.
     */
    public DigestValue?: TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101DigestValueType;
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
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType instance.
     * Schema context: Runtime class for CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
