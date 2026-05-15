import { TPlNfAg100JProcEventoNfAgV100ProcEventoNfAg } from './TPlNfAg100JProcEventoNfAgV100ProcEventoNfAg';

export interface IPlNfAg100JProcEventoNfAgV100 {
  "@class"?: string;
  procEventoNFAg?: TPlNfAg100JProcEventoNfAgV100ProcEventoNfAg;
}

export class CPlNfAg100JProcEventoNfAgV100 {
    public "@class"?: string;

    public procEventoNFAg?: TPlNfAg100JProcEventoNfAgV100ProcEventoNfAg;

    public constructor(props?: CPlNfAg100JProcEventoNfAgV100) {
        this["@class"] = ".CPlNfAg100JProcEventoNfAgV100";


        if (props) {

        	this.procEventoNFAg = props.procEventoNFAg;
        }
    }
}
