export interface IPlNFeDistDFe103ResNFeV101ResNFe {
  "@class"?: string;
  chNFe?: unknown;
  IE?: unknown;
  dhEmi?: unknown;
  vNF?: unknown;
  digVal?: unknown;
  dhRecbto?: unknown;
  nProt?: unknown;
}

export class CPlNFeDistDFe103ResNFeV101ResNFe {
    public "@class"?: string;

    public chNFe?: unknown;
    public IE?: unknown;
    public dhEmi?: unknown;
    public vNF?: unknown;
    public digVal?: unknown;
    public dhRecbto?: unknown;
    public nProt?: unknown;

    //choice

    public CNPJ(arg: unknown) {
        delete((this as any).CPF);
        (this as any).CNPJ = arg;
    }

    //choice

    public CPF(arg: unknown) {
        delete((this as any).CNPJ);
        (this as any).CPF = arg;
    }

    public constructor(props?: CPlNFeDistDFe103ResNFeV101ResNFe) {
        this["@class"] = ".CPlNFeDistDFe103ResNFeV101ResNFe";


        if (props) {

        	this.chNFe = props.chNFe;
        	this.IE = props.IE;
        	this.dhEmi = props.dhEmi;
        	this.vNF = props.vNF;
        	this.digVal = props.digVal;
        	this.dhRecbto = props.dhRecbto;
        	this.nProt = props.nProt;
        }
    }
}
