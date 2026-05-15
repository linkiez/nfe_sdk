export interface IPlNfAg100JEvCancNfAgV100EvCancNfAg {
  "@class"?: string;
  nProt?: unknown;
  xJust?: unknown;
}

export class CPlNfAg100JEvCancNfAgV100EvCancNfAg {
    public "@class"?: string;

    public nProt?: unknown;
    public xJust?: unknown;

    public constructor(props?: CPlNfAg100JEvCancNfAgV100EvCancNfAg) {
        this["@class"] = ".CPlNfAg100JEvCancNfAgV100EvCancNfAg";


        if (props) {

        	this.nProt = props.nProt;
        	this.xJust = props.xJust;
        }
    }
}
