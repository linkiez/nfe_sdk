import { TPlNfAg100JConsStatServNfAgV100ConsStatServNfAg } from './TPlNfAg100JConsStatServNfAgV100ConsStatServNfAg';

export interface IPlNfAg100JConsStatServNfAgV100 {
  "@class"?: string;
  consStatServNFAg?: TPlNfAg100JConsStatServNfAgV100ConsStatServNfAg;
}

export class CPlNfAg100JConsStatServNfAgV100 {
    public "@class"?: string;

    public consStatServNFAg?: TPlNfAg100JConsStatServNfAgV100ConsStatServNfAg;

    public constructor(props?: CPlNfAg100JConsStatServNfAgV100) {
        this["@class"] = ".CPlNfAg100JConsStatServNfAgV100";


        if (props) {

        	this.consStatServNFAg = props.consStatServNFAg;
        }
    }
}
