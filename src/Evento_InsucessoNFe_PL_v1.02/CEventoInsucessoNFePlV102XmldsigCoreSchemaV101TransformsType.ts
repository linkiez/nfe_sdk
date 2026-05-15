import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType';

export interface IEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType;
}

export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
