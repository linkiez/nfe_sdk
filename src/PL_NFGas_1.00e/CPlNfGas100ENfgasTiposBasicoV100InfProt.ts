export interface IPlNfGas100ENfgasTiposBasicoV100InfProt {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  chNFGas?: unknown;
  dhRecbto?: unknown;
  nProt?: unknown;
  digVal?: unknown;
  xMotivo?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100InfProt {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public chNFGas?: unknown;
    public dhRecbto?: unknown;
    public nProt?: unknown;
    public digVal?: unknown;
    public xMotivo?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100InfProt) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100InfProt";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.chNFGas = props.chNFGas;
        	this.dhRecbto = props.dhRecbto;
        	this.nProt = props.nProt;
        	this.digVal = props.digVal;
        	this.xMotivo = props.xMotivo;
        }
    }
}
