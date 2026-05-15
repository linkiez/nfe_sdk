import { TPlNfAg100JNfagTiposBasicoV100Compet } from './TPlNfAg100JNfagTiposBasicoV100Compet';

import { TPlNfAg100JNfagTiposBasicoV100UMedAg } from './TPlNfAg100JNfagTiposBasicoV100UMedAg';

export interface IPlNfAg100JNfagTiposBasicoV100GCons {
  "@class"?: string;
  CompetFat?: TPlNfAg100JNfagTiposBasicoV100Compet;
  uMed?: TPlNfAg100JNfagTiposBasicoV100UMedAg;
  medDiaria?: unknown;
  consumo?: unknown;
  volFat?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100GCons {
    public "@class"?: string;

    public CompetFat?: TPlNfAg100JNfagTiposBasicoV100Compet;
    public uMed?: TPlNfAg100JNfagTiposBasicoV100UMedAg;
    public medDiaria?: unknown;
    public consumo?: unknown;
    public volFat?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GCons) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GCons";


        if (props) {

        	this.CompetFat = props.CompetFat;
        	this.uMed = props.uMed;
        	this.medDiaria = props.medDiaria;
        	this.consumo = props.consumo;
        	this.volFat = props.volFat;
        }
    }
}
