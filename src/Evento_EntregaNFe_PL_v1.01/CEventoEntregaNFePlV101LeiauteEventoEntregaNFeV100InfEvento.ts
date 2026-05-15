export interface IEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento {
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

export class CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento {
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

    //choice

    public CNPJDest(arg: unknown) {
        delete((this as any).CPFDest);
        (this as any).CNPJDest = arg;
    }

    //choice

    public CPFDest(arg: unknown) {
        delete((this as any).CNPJDest);
        (this as any).CPFDest = arg;
    }

    public constructor(props?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento) {
        this["@class"] = ".CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100InfEvento";


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
