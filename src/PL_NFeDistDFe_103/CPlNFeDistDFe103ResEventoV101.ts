import { CPlNFeDistDFe103ResEventoV101ResEvento } from './CPlNFeDistDFe103ResEventoV101ResEvento';

export interface IPlNFeDistDFe103ResEventoV101 {
  "@class"?: string;
  resEvento?: CPlNFeDistDFe103ResEventoV101ResEvento;
}

export class CPlNFeDistDFe103ResEventoV101 {
    public "@class"?: string;

    public resEvento?: CPlNFeDistDFe103ResEventoV101ResEvento;

    public constructor(props?: CPlNFeDistDFe103ResEventoV101) {
        this["@class"] = ".CPlNFeDistDFe103ResEventoV101";


        if (props) {

        	this.resEvento = (props.resEvento) ? new CPlNFeDistDFe103ResEventoV101ResEvento(props.resEvento): undefined;
        }
    }
}
