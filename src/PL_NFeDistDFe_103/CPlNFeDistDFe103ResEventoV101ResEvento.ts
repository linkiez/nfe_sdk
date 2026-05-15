export interface IPlNFeDistDFe103ResEventoV101ResEvento {
  "@class"?: string;
  cOrgao?: unknown;
  chNFe?: unknown;
  dhEvento?: unknown;
  dhRecbto?: unknown;
  nProt?: unknown;
}

export class CPlNFeDistDFe103ResEventoV101ResEvento {
    public "@class"?: string;

    public cOrgao?: unknown;
    public chNFe?: unknown;
    public dhEvento?: unknown;
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

    public constructor(props?: CPlNFeDistDFe103ResEventoV101ResEvento) {
        this["@class"] = ".CPlNFeDistDFe103ResEventoV101ResEvento";


        if (props) {

        	this.cOrgao = props.cOrgao;
        	this.chNFe = props.chNFe;
        	this.dhEvento = props.dhEvento;
        	this.dhRecbto = props.dhRecbto;
        	this.nProt = props.nProt;
        }
    }
}
