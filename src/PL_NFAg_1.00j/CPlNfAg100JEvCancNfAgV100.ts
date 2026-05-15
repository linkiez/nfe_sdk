import { CPlNfAg100JEvCancNfAgV100EvCancNfAg } from './CPlNfAg100JEvCancNfAgV100EvCancNfAg';

export interface IPlNfAg100JEvCancNfAgV100 {
  "@class"?: string;
  evCancNFAg?: CPlNfAg100JEvCancNfAgV100EvCancNfAg;
}

export class CPlNfAg100JEvCancNfAgV100 {
    public "@class"?: string;

    public evCancNFAg?: CPlNfAg100JEvCancNfAgV100EvCancNfAg;

    public constructor(props?: CPlNfAg100JEvCancNfAgV100) {
        this["@class"] = ".CPlNfAg100JEvCancNfAgV100";


        if (props) {

        	this.evCancNFAg = (props.evCancNFAg) ? new CPlNfAg100JEvCancNfAgV100EvCancNfAg(props.evCancNFAg): undefined;
        }
    }
}
