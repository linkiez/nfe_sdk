import { TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas } from './TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas';

export interface IPlNfGas100EConsSitNfGasTiposBasicoV100ConsSitNfGas {
  "@class"?: string;
  tpAmb?: unknown;
  xServ?: unknown;
  chNFGas?: unknown;
  $versao?: TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas;
}

export class CPlNfGas100EConsSitNfGasTiposBasicoV100ConsSitNfGas {
    public "@class"?: string;

    public tpAmb?: unknown;
    public xServ?: unknown;
    public chNFGas?: unknown;
    public $versao?: TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas;

    public constructor(props?: CPlNfGas100EConsSitNfGasTiposBasicoV100ConsSitNfGas) {
        this["@class"] = ".CPlNfGas100EConsSitNfGasTiposBasicoV100ConsSitNfGas";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.xServ = props.xServ;
        	this.chNFGas = props.chNFGas;
        	this.$versao = props.$versao;
        }
    }
}
