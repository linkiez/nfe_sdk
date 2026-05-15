import { TPlNfAg100JRetEventoNfAgV100RetEventoNfAg } from './TPlNfAg100JRetEventoNfAgV100RetEventoNfAg';

export interface IPlNfAg100JRetEventoNfAgV100 {
  "@class"?: string;
  retEventoNFAg?: TPlNfAg100JRetEventoNfAgV100RetEventoNfAg;
}

export class CPlNfAg100JRetEventoNfAgV100 {
    public "@class"?: string;

    public retEventoNFAg?: TPlNfAg100JRetEventoNfAgV100RetEventoNfAg;

    public constructor(props?: CPlNfAg100JRetEventoNfAgV100) {
        this["@class"] = ".CPlNfAg100JRetEventoNfAgV100";


        if (props) {

        	this.retEventoNFAg = props.retEventoNFAg;
        }
    }
}
