import { CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas } from './CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas';

import { CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas } from './CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas';

import { TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas } from './TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas';

export interface IPlNfGas100EConsSitNfGasTiposBasicoV100RetConsSitNfGas {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cUF?: unknown;
  protNFGas?: CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas;
  procEventoNFGas?: CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas;
  $versao?: TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas;
}

export class CPlNfGas100EConsSitNfGasTiposBasicoV100RetConsSitNfGas {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cUF?: unknown;
    public protNFGas?: CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas;
    public procEventoNFGas?: CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas;
    public $versao?: TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas;

    public constructor(props?: CPlNfGas100EConsSitNfGasTiposBasicoV100RetConsSitNfGas) {
        this["@class"] = ".CPlNfGas100EConsSitNfGasTiposBasicoV100RetConsSitNfGas";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cUF = props.cUF;
        	this.protNFGas = (props.protNFGas) ? new CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas(props.protNFGas): undefined;
        	this.procEventoNFGas = (props.procEventoNFGas) ? new CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas(props.procEventoNFGas): undefined;
        	this.$versao = props.$versao;
        }
    }
}
