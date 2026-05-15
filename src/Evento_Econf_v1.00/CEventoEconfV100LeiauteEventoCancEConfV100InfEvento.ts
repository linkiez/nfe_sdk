export interface IEventoEconfV100LeiauteEventoCancEConfV100InfEvento {
  "@class"?: string;
  detEvento?: unknown;
  cOrgao?: unknown;
  tpAmb?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  verAplic?: unknown;
  cStat?: unknown;
  xMotivo?: unknown;
  nProt?: unknown;
}

export class CEventoEconfV100LeiauteEventoCancEConfV100InfEvento {
    public "@class"?: string;

    public detEvento?: unknown;
    public cOrgao?: unknown;
    public tpAmb?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
    public verAplic?: unknown;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public nProt?: unknown;

    public constructor(props?: CEventoEconfV100LeiauteEventoCancEConfV100InfEvento) {
        this["@class"] = ".CEventoEconfV100LeiauteEventoCancEConfV100InfEvento";


        if (props) {

        	this.detEvento = props.detEvento;
        	this.cOrgao = props.cOrgao;
        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.verAplic = props.verAplic;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.nProt = props.nProt;
        }
    }
}
