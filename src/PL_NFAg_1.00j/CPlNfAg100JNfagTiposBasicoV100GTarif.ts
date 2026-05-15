import { TPlNfAg100JNfagTiposBasicoV100Faixa } from './TPlNfAg100JNfagTiposBasicoV100Faixa';

export interface IPlNfAg100JNfagTiposBasicoV100GTarif {
  "@class"?: string;
  dIniTarif?: unknown;
  dFimTarif?: unknown;
  tpFaixaCons?: TPlNfAg100JNfagTiposBasicoV100Faixa;
}

export class CPlNfAg100JNfagTiposBasicoV100GTarif {
    public "@class"?: string;

    public dIniTarif?: unknown;
    public dFimTarif?: unknown;
    public tpFaixaCons?: TPlNfAg100JNfagTiposBasicoV100Faixa;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GTarif) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GTarif";


        if (props) {

        	this.dIniTarif = props.dIniTarif;
        	this.dFimTarif = props.dFimTarif;
        	this.tpFaixaCons = props.tpFaixaCons;
        }
    }
}
