import { TPlNfAg100JNfagTiposBasicoV100Ligacao } from './TPlNfAg100JNfagTiposBasicoV100Ligacao';

export interface IPlNfAg100JNfagTiposBasicoV100Ligacao {
  "@class"?: string;
  tpLigacao?: TPlNfAg100JNfagTiposBasicoV100Ligacao;
}

export class CPlNfAg100JNfagTiposBasicoV100Ligacao {
    public "@class"?: string;

    public tpLigacao?: TPlNfAg100JNfagTiposBasicoV100Ligacao;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Ligacao) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Ligacao";


        if (props) {

        	this.tpLigacao = props.tpLigacao;
        }
    }
}
