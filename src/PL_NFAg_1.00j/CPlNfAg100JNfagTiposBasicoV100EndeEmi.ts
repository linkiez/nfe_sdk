import { TPlNfAg100JNfagTiposBasicoV100Email } from './TPlNfAg100JNfagTiposBasicoV100Email';

export interface IPlNfAg100JNfagTiposBasicoV100EndeEmi {
  "@class"?: string;
  cMun?: unknown;
  UF?: unknown;
  email?: TPlNfAg100JNfagTiposBasicoV100Email;
}

export class CPlNfAg100JNfagTiposBasicoV100EndeEmi {
    public "@class"?: string;

    public cMun?: unknown;
    public UF?: unknown;
    public email?: TPlNfAg100JNfagTiposBasicoV100Email;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100EndeEmi) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100EndeEmi";


        if (props) {

        	this.cMun = props.cMun;
        	this.UF = props.UF;
        	this.email = props.email;
        }
    }
}
