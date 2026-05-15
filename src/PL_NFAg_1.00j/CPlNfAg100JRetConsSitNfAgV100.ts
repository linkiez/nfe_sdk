import { TPlNfAg100JRetConsSitNfAgV100RetConsSitNfAg } from './TPlNfAg100JRetConsSitNfAgV100RetConsSitNfAg';

export interface IPlNfAg100JRetConsSitNfAgV100 {
  "@class"?: string;
  retConsSitNFAg?: TPlNfAg100JRetConsSitNfAgV100RetConsSitNfAg;
}

export class CPlNfAg100JRetConsSitNfAgV100 {
    public "@class"?: string;

    public retConsSitNFAg?: TPlNfAg100JRetConsSitNfAgV100RetConsSitNfAg;

    public constructor(props?: CPlNfAg100JRetConsSitNfAgV100) {
        this["@class"] = ".CPlNfAg100JRetConsSitNfAgV100";


        if (props) {

        	this.retConsSitNFAg = props.retConsSitNFAg;
        }
    }
}
