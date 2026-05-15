import { CPlNfAg100JNfagTiposBasicoV100GMedicao } from './CPlNfAg100JNfagTiposBasicoV100GMedicao';

import { TPlNfAg100JNfagTiposBasicoV100OrigemQtdAg } from './TPlNfAg100JNfagTiposBasicoV100OrigemQtdAg';

export interface IPlNfAg100JNfagTiposBasicoV100Prod {
  "@class"?: string;
  indOrigemQtd?: TPlNfAg100JNfagTiposBasicoV100OrigemQtdAg;
  gMedicao?: CPlNfAg100JNfagTiposBasicoV100GMedicao;
  qFaturada?: unknown;
  vItem?: unknown;
  fatorPoluicao?: unknown;
  vProd?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100Prod {
    public "@class"?: string;

    public indOrigemQtd?: TPlNfAg100JNfagTiposBasicoV100OrigemQtdAg;
    public gMedicao?: CPlNfAg100JNfagTiposBasicoV100GMedicao;
    public qFaturada?: unknown;
    public vItem?: unknown;
    public fatorPoluicao?: unknown;
    public vProd?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Prod) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Prod";


        if (props) {

        	this.indOrigemQtd = props.indOrigemQtd;
        	this.gMedicao = (props.gMedicao) ? new CPlNfAg100JNfagTiposBasicoV100GMedicao(props.gMedicao): undefined;
        	this.qFaturada = props.qFaturada;
        	this.vItem = props.vItem;
        	this.fatorPoluicao = props.fatorPoluicao;
        	this.vProd = props.vProd;
        }
    }
}
