import { CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt } from './CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt';

export interface IPlNFeDistDFe103RetDistDFeIntV101 {
  "@class"?: string;
  retDistDFeInt?: CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt;
}

export class CPlNFeDistDFe103RetDistDFeIntV101 {
    public "@class"?: string;

    public retDistDFeInt?: CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt;

    public constructor(props?: CPlNFeDistDFe103RetDistDFeIntV101) {
        this["@class"] = ".CPlNFeDistDFe103RetDistDFeIntV101";


        if (props) {

        	this.retDistDFeInt = (props.retDistDFeInt) ? new CPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt(props.retDistDFeInt): undefined;
        }
    }
}
