export interface IConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfProt {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  chNFe?: unknown;
  dhRecbto?: unknown;
  nProt?: unknown;
  digVal?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
}

export class CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfProt {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public chNFe?: unknown;
    public dhRecbto?: unknown;
    public nProt?: unknown;
    public digVal?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;

    public constructor(props?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfProt) {
        this["@class"] = ".CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfProt";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.chNFe = props.chNFe;
        	this.dhRecbto = props.dhRecbto;
        	this.nProt = props.nProt;
        	this.digVal = props.digVal;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        }
    }
}
