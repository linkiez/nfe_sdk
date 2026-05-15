import { TPlNfGas100ENfgasTiposBasicoV100Classe } from './TPlNfGas100ENfgasTiposBasicoV100Classe';

import { TPlNfGas100ENfgasTiposBasicoV100Ligacao } from './TPlNfGas100ENfgasTiposBasicoV100Ligacao';

export interface IPlNfGas100ENfgasTiposBasicoV100Instalacao {
  "@class"?: string;
  tpInstalacao?: TPlNfGas100ENfgasTiposBasicoV100Ligacao;
  tpClasse?: TPlNfGas100ENfgasTiposBasicoV100Classe;
}

export class CPlNfGas100ENfgasTiposBasicoV100Instalacao {
    public "@class"?: string;

    public tpInstalacao?: TPlNfGas100ENfgasTiposBasicoV100Ligacao;
    public tpClasse?: TPlNfGas100ENfgasTiposBasicoV100Classe;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Instalacao) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Instalacao";


        if (props) {

        	this.tpInstalacao = props.tpInstalacao;
        	this.tpClasse = props.tpClasse;
        }
    }
}
