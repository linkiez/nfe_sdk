import { TPlNfAg100JRetConsStatServNfAgV100RetConsStatServNfAg } from './TPlNfAg100JRetConsStatServNfAgV100RetConsStatServNfAg';

export interface IPlNfAg100JRetConsStatServNfAgV100 {
  "@class"?: string;
  retConsStatServNFAg?: TPlNfAg100JRetConsStatServNfAgV100RetConsStatServNfAg;
}

export class CPlNfAg100JRetConsStatServNfAgV100 {
    public "@class"?: string;

    public retConsStatServNFAg?: TPlNfAg100JRetConsStatServNfAgV100RetConsStatServNfAg;

    public constructor(props?: CPlNfAg100JRetConsStatServNfAgV100) {
        this["@class"] = ".CPlNfAg100JRetConsStatServNfAgV100";


        if (props) {

        	this.retConsStatServNFAg = props.retConsStatServNFAg;
        }
    }
}
