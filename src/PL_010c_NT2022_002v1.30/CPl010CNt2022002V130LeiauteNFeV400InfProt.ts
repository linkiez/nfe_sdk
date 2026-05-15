export interface IPl010CNt2022002V130LeiauteNFeV400InfProt {
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

export class CPl010CNt2022002V130LeiauteNFeV400InfProt {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public chNFe?: unknown;
    public dhRecbto?: unknown;
    public nProt?: unknown;
    public digVal?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400InfProt) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400InfProt";


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
