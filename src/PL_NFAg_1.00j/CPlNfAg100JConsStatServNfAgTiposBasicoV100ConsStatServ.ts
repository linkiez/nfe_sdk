import { TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat } from './TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat';

export interface IPlNfAg100JConsStatServNfAgTiposBasicoV100ConsStatServ {
  "@class"?: string;
  tpAmb?: unknown;
  xServ?: unknown;
  $versao?: TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat;
}

export class CPlNfAg100JConsStatServNfAgTiposBasicoV100ConsStatServ {
    public "@class"?: string;

    public tpAmb?: unknown;
    public xServ?: unknown;
    public $versao?: TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat;

    public constructor(props?: CPlNfAg100JConsStatServNfAgTiposBasicoV100ConsStatServ) {
        this["@class"] = ".CPlNfAg100JConsStatServNfAgTiposBasicoV100ConsStatServ";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.xServ = props.xServ;
        	this.$versao = props.$versao;
        }
    }
}
