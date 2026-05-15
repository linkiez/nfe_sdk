import { CPlNfAg100JProcNfAgV100NfagProc } from './CPlNfAg100JProcNfAgV100NfagProc';

export interface IPlNfAg100JProcNfAgV100 {
  "@class"?: string;
  nfagProc?: CPlNfAg100JProcNfAgV100NfagProc;
}

export class CPlNfAg100JProcNfAgV100 {
    public "@class"?: string;

    public nfagProc?: CPlNfAg100JProcNfAgV100NfagProc;

    public constructor(props?: CPlNfAg100JProcNfAgV100) {
        this["@class"] = ".CPlNfAg100JProcNfAgV100";


        if (props) {

        	this.nfagProc = (props.nfagProc) ? new CPlNfAg100JProcNfAgV100NfagProc(props.nfagProc): undefined;
        }
    }
}
