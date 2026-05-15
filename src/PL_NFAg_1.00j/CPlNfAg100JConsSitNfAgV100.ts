import { TPlNfAg100JConsSitNfAgV100ConsSitNfAg } from './TPlNfAg100JConsSitNfAgV100ConsSitNfAg';

export interface IPlNfAg100JConsSitNfAgV100 {
  "@class"?: string;
  consSitNFAg?: TPlNfAg100JConsSitNfAgV100ConsSitNfAg;
}

export class CPlNfAg100JConsSitNfAgV100 {
    public "@class"?: string;

    public consSitNFAg?: TPlNfAg100JConsSitNfAgV100ConsSitNfAg;

    public constructor(props?: CPlNfAg100JConsSitNfAgV100) {
        this["@class"] = ".CPlNfAg100JConsSitNfAgV100";


        if (props) {

        	this.consSitNFAg = props.consSitNFAg;
        }
    }
}
