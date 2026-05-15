import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType';

import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType';

import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType';

export interface IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
