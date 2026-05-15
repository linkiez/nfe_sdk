export interface IPlNFeDistDFe103DistDFeIntV101DistDFeInt {
  "@class"?: string;
  tpAmb?: unknown;
  cUFAutor?: unknown;
}

export class CPlNFeDistDFe103DistDFeIntV101DistDFeInt {
    public "@class"?: string;

    public tpAmb?: unknown;
    public cUFAutor?: unknown;

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

    //choice

    public distNSU(arg: unknown) {
        delete((this as any).consNSU);
        delete((this as any).consChNFe);
        (this as any).distNSU = arg;
    }

    //choice

    public consNSU(arg: unknown) {
        delete((this as any).distNSU);
        delete((this as any).consChNFe);
        (this as any).consNSU = arg;
    }

    //choice

    public consChNFe(arg: unknown) {
        delete((this as any).distNSU);
        delete((this as any).consNSU);
        (this as any).consChNFe = arg;
    }

    public constructor(props?: CPlNFeDistDFe103DistDFeIntV101DistDFeInt) {
        this["@class"] = ".CPlNFeDistDFe103DistDFeIntV101DistDFeInt";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.cUFAutor = props.cUFAutor;
        }
    }
}
