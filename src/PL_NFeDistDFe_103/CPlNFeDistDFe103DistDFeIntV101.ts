import { CPlNFeDistDFe103DistDFeIntV101DistDFeInt } from './CPlNFeDistDFe103DistDFeIntV101DistDFeInt';

export interface IPlNFeDistDFe103DistDFeIntV101 {
  "@class"?: string;
  distDFeInt?: CPlNFeDistDFe103DistDFeIntV101DistDFeInt;
}

export class CPlNFeDistDFe103DistDFeIntV101 {
    public "@class"?: string;

    public distDFeInt?: CPlNFeDistDFe103DistDFeIntV101DistDFeInt;

    public constructor(props?: CPlNFeDistDFe103DistDFeIntV101) {
        this["@class"] = ".CPlNFeDistDFe103DistDFeIntV101";


        if (props) {

        	this.distDFeInt = (props.distDFeInt) ? new CPlNFeDistDFe103DistDFeIntV101DistDFeInt(props.distDFeInt): undefined;
        }
    }
}
