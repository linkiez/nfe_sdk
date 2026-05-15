import { TPlNfGas100EXmldsigCoreSchemaV101TransformUri } from './TPlNfGas100EXmldsigCoreSchemaV101TransformUri';

export interface IPlNfGas100EXmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TPlNfGas100EXmldsigCoreSchemaV101TransformUri;
}

export class CPlNfGas100EXmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TPlNfGas100EXmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
