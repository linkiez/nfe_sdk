export interface IPlNfAg100JNfagTiposBasicoV100InfProt {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  chNFAg?: unknown;
  dhRecbto?: unknown;
  nProt?: unknown;
  digVal?: unknown;
  xMotivo?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100InfProt {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public chNFAg?: unknown;
    public dhRecbto?: unknown;
    public nProt?: unknown;
    public digVal?: unknown;
    public xMotivo?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100InfProt) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100InfProt";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.chNFAg = props.chNFAg;
        	this.dhRecbto = props.dhRecbto;
        	this.nProt = props.nProt;
        	this.digVal = props.digVal;
        	this.xMotivo = props.xMotivo;
        }
    }
}
