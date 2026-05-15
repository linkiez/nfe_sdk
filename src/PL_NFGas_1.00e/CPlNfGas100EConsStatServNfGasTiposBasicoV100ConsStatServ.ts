import { TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat } from './TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat';

export interface IPlNfGas100EConsStatServNfGasTiposBasicoV100ConsStatServ {
  "@class"?: string;
  tpAmb?: unknown;
  xServ?: unknown;
  $versao?: TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat;
}

export class CPlNfGas100EConsStatServNfGasTiposBasicoV100ConsStatServ {
    public "@class"?: string;

    public tpAmb?: unknown;
    public xServ?: unknown;
    public $versao?: TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat;

    public constructor(props?: CPlNfGas100EConsStatServNfGasTiposBasicoV100ConsStatServ) {
        this["@class"] = ".CPlNfGas100EConsStatServNfGasTiposBasicoV100ConsStatServ";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.xServ = props.xServ;
        	this.$versao = props.$versao;
        }
    }
}
