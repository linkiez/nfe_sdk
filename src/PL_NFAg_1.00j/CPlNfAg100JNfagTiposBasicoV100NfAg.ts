import { CPlNfAg100JNfagTiposBasicoV100InfNfAg } from './CPlNfAg100JNfagTiposBasicoV100InfNfAg';

import { CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl } from './CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl';

export interface IPlNfAg100JNfagTiposBasicoV100NfAg {
  "@class"?: string;
  unknown?: unknown;
  infNFAg?: CPlNfAg100JNfagTiposBasicoV100InfNfAg;
  infNFAgSupl?: CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl;
}

export class CPlNfAg100JNfagTiposBasicoV100NfAg {
    public "@class"?: string;

    public unknown?: unknown;
    public infNFAg?: CPlNfAg100JNfagTiposBasicoV100InfNfAg;
    public infNFAgSupl?: CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100NfAg) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100NfAg";


        if (props) {

        	this.unknown = props.unknown;
        	this.infNFAg = (props.infNFAg) ? new CPlNfAg100JNfagTiposBasicoV100InfNfAg(props.infNFAg): undefined;
        	this.infNFAgSupl = (props.infNFAgSupl) ? new CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl(props.infNFAgSupl): undefined;
        }
    }
}
