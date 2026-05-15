export interface IPlNfAg100JProcNfAgV100NfagProc {
  "@class"?: string;
  NFAg?: unknown;
  protNFAg?: unknown;
}

export class CPlNfAg100JProcNfAgV100NfagProc {
    public "@class"?: string;

    public NFAg?: unknown;
    public protNFAg?: unknown;

    public constructor(props?: CPlNfAg100JProcNfAgV100NfagProc) {
        this["@class"] = ".CPlNfAg100JProcNfAgV100NfagProc";


        if (props) {

        	this.NFAg = props.NFAg;
        	this.protNFAg = props.protNFAg;
        }
    }
}
