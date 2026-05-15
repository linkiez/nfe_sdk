import { CPlNfGas100ENfgasTiposBasicoV100ProtNfGas } from './CPlNfGas100ENfgasTiposBasicoV100ProtNfGas';

import { TPlNfGas100ENfgasTiposBasicoV100VerNfGas } from './TPlNfGas100ENfgasTiposBasicoV100VerNfGas';

export interface IPlNfGas100ENfgasTiposBasicoV100RetNfGas {
  "@class"?: string;
  tpAmb?: unknown;
  cUF?: unknown;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  protNFGas?: CPlNfGas100ENfgasTiposBasicoV100ProtNfGas;
  $versao?: TPlNfGas100ENfgasTiposBasicoV100VerNfGas;
}

export class CPlNfGas100ENfgasTiposBasicoV100RetNfGas {
    public "@class"?: string;

    public tpAmb?: unknown;
    public cUF?: unknown;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public protNFGas?: CPlNfGas100ENfgasTiposBasicoV100ProtNfGas;
    public $versao?: TPlNfGas100ENfgasTiposBasicoV100VerNfGas;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100RetNfGas) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100RetNfGas";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.cUF = props.cUF;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.protNFGas = (props.protNFGas) ? new CPlNfGas100ENfgasTiposBasicoV100ProtNfGas(props.protNFGas): undefined;
        	this.$versao = props.$versao;
        }
    }
}
