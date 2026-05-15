import { CPlNFeDistDFe103ResNFeV101ResNFe } from './CPlNFeDistDFe103ResNFeV101ResNFe';

export interface IPlNFeDistDFe103ResNFeV101 {
  "@class"?: string;
  resNFe?: CPlNFeDistDFe103ResNFeV101ResNFe;
}

export class CPlNFeDistDFe103ResNFeV101 {
    public "@class"?: string;

    public resNFe?: CPlNFeDistDFe103ResNFeV101ResNFe;

    public constructor(props?: CPlNFeDistDFe103ResNFeV101) {
        this["@class"] = ".CPlNFeDistDFe103ResNFeV101";


        if (props) {

        	this.resNFe = (props.resNFe) ? new CPlNFeDistDFe103ResNFeV101ResNFe(props.resNFe): undefined;
        }
    }
}
