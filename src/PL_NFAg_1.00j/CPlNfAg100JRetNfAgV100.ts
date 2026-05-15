import { TPlNfAg100JRetNfAgV100RetNfAg } from './TPlNfAg100JRetNfAgV100RetNfAg';

export interface IPlNfAg100JRetNfAgV100 {
  "@class"?: string;
  retNFAg?: TPlNfAg100JRetNfAgV100RetNfAg;
}

export class CPlNfAg100JRetNfAgV100 {
    public "@class"?: string;

    public retNFAg?: TPlNfAg100JRetNfAgV100RetNfAg;

    public constructor(props?: CPlNfAg100JRetNfAgV100) {
        this["@class"] = ".CPlNfAg100JRetNfAgV100";


        if (props) {

        	this.retNFAg = props.retNFAg;
        }
    }
}
