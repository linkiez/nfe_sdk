export interface IConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfCanc {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  cUF?: unknown;
  chNFe?: unknown;
  dhRecbto?: unknown;
  nProt?: unknown;
}

export class CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfCanc {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public cUF?: unknown;
    public chNFe?: unknown;
    public dhRecbto?: unknown;
    public nProt?: unknown;

    public constructor(props?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfCanc) {
        this["@class"] = ".CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfCanc";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.cUF = props.cUF;
        	this.chNFe = props.chNFe;
        	this.dhRecbto = props.dhRecbto;
        	this.nProt = props.nProt;
        }
    }
}
