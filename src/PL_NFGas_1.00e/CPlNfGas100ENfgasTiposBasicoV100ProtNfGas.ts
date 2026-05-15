import { CPlNfGas100ENfgasTiposBasicoV100InfFisco } from './CPlNfGas100ENfgasTiposBasicoV100InfFisco';

import { CPlNfGas100ENfgasTiposBasicoV100InfProt } from './CPlNfGas100ENfgasTiposBasicoV100InfProt';

import { TPlNfGas100ENfgasTiposBasicoV100VerNfGas } from './TPlNfGas100ENfgasTiposBasicoV100VerNfGas';

export interface IPlNfGas100ENfgasTiposBasicoV100ProtNfGas {
  "@class"?: string;
  unknown?: unknown;
  infProt?: CPlNfGas100ENfgasTiposBasicoV100InfProt;
  infFisco?: CPlNfGas100ENfgasTiposBasicoV100InfFisco;
  $versao?: TPlNfGas100ENfgasTiposBasicoV100VerNfGas;
}

export class CPlNfGas100ENfgasTiposBasicoV100ProtNfGas {
    public "@class"?: string;

    public unknown?: unknown;
    public infProt?: CPlNfGas100ENfgasTiposBasicoV100InfProt;
    public infFisco?: CPlNfGas100ENfgasTiposBasicoV100InfFisco;
    public $versao?: TPlNfGas100ENfgasTiposBasicoV100VerNfGas;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100ProtNfGas) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100ProtNfGas";


        if (props) {

        	this.unknown = props.unknown;
        	this.infProt = (props.infProt) ? new CPlNfGas100ENfgasTiposBasicoV100InfProt(props.infProt): undefined;
        	this.infFisco = (props.infFisco) ? new CPlNfGas100ENfgasTiposBasicoV100InfFisco(props.infFisco): undefined;
        	this.$versao = props.$versao;
        }
    }
}
