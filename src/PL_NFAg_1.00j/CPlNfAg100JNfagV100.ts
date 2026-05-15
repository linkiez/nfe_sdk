import { TPlNfAg100JNfagV100NfAg } from './TPlNfAg100JNfagV100NfAg';

export interface IPlNfAg100JNfagV100 {
  "@class"?: string;
  nFAg?: TPlNfAg100JNfagV100NfAg;
}

export class CPlNfAg100JNfagV100 {
    public "@class"?: string;

    public nFAg?: TPlNfAg100JNfagV100NfAg;

    public constructor(props?: CPlNfAg100JNfagV100) {
        this["@class"] = ".CPlNfAg100JNfagV100";


        if (props) {

        	this.nFAg = props.nFAg;
        }
    }
}
