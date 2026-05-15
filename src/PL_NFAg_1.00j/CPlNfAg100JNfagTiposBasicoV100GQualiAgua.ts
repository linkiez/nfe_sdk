import { CPlNfAg100JNfagTiposBasicoV100GAnalise } from './CPlNfAg100JNfagTiposBasicoV100GAnalise';

import { TPlNfAg100JNfagTiposBasicoV100Compet } from './TPlNfAg100JNfagTiposBasicoV100Compet';

export interface IPlNfAg100JNfagTiposBasicoV100GQualiAgua {
  "@class"?: string;
  CompetAnalise?: TPlNfAg100JNfagTiposBasicoV100Compet;
  gAnalise?: CPlNfAg100JNfagTiposBasicoV100GAnalise;
}

export class CPlNfAg100JNfagTiposBasicoV100GQualiAgua {
    public "@class"?: string;

    public CompetAnalise?: TPlNfAg100JNfagTiposBasicoV100Compet;
    public gAnalise?: CPlNfAg100JNfagTiposBasicoV100GAnalise;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GQualiAgua) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GQualiAgua";


        if (props) {

        	this.CompetAnalise = props.CompetAnalise;
        	this.gAnalise = (props.gAnalise) ? new CPlNfAg100JNfagTiposBasicoV100GAnalise(props.gAnalise): undefined;
        }
    }
}
