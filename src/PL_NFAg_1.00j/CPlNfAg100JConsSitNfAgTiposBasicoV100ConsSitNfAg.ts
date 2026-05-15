import { TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg } from './TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg';

export interface IPlNfAg100JConsSitNfAgTiposBasicoV100ConsSitNfAg {
  "@class"?: string;
  tpAmb?: unknown;
  xServ?: unknown;
  chNFAg?: unknown;
  $versao?: TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg;
}

export class CPlNfAg100JConsSitNfAgTiposBasicoV100ConsSitNfAg {
    public "@class"?: string;

    public tpAmb?: unknown;
    public xServ?: unknown;
    public chNFAg?: unknown;
    public $versao?: TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg;

    public constructor(props?: CPlNfAg100JConsSitNfAgTiposBasicoV100ConsSitNfAg) {
        this["@class"] = ".CPlNfAg100JConsSitNfAgTiposBasicoV100ConsSitNfAg";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.xServ = props.xServ;
        	this.chNFAg = props.chNFAg;
        	this.$versao = props.$versao;
        }
    }
}
