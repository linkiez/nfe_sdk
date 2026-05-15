import { TPlNfAg100JEventoNfAgV100EventoNfAg } from './TPlNfAg100JEventoNfAgV100EventoNfAg';

export interface IPlNfAg100JEventoNfAgV100 {
  "@class"?: string;
  eventoNFAg?: TPlNfAg100JEventoNfAgV100EventoNfAg;
}

export class CPlNfAg100JEventoNfAgV100 {
    public "@class"?: string;

    public eventoNFAg?: TPlNfAg100JEventoNfAgV100EventoNfAg;

    public constructor(props?: CPlNfAg100JEventoNfAgV100) {
        this["@class"] = ".CPlNfAg100JEventoNfAgV100";


        if (props) {

        	this.eventoNFAg = props.eventoNFAg;
        }
    }
}
