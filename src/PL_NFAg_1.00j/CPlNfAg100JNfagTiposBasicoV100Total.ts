import { CPlNfAg100JNfagTiposBasicoV100VRetTribTot } from './CPlNfAg100JNfagTiposBasicoV100VRetTribTot';

export interface IPlNfAg100JNfagTiposBasicoV100Total {
  "@class"?: string;
  vProd?: unknown;
  vRetTribTot?: CPlNfAg100JNfagTiposBasicoV100VRetTribTot;
  vCOFINS?: unknown;
  vPIS?: unknown;
  vTFS?: unknown;
  vTFU?: unknown;
  vNF?: unknown;
  IBSCBSTot?: unknown;
  vTotDFe?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100Total {
    public "@class"?: string;

    public vProd?: unknown;
    public vRetTribTot?: CPlNfAg100JNfagTiposBasicoV100VRetTribTot;
    public vCOFINS?: unknown;
    public vPIS?: unknown;
    public vTFS?: unknown;
    public vTFU?: unknown;
    public vNF?: unknown;
    public IBSCBSTot?: unknown;
    public vTotDFe?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Total) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Total";


        if (props) {

        	this.vProd = props.vProd;
        	this.vRetTribTot = (props.vRetTribTot) ? new CPlNfAg100JNfagTiposBasicoV100VRetTribTot(props.vRetTribTot): undefined;
        	this.vCOFINS = props.vCOFINS;
        	this.vPIS = props.vPIS;
        	this.vTFS = props.vTFS;
        	this.vTFU = props.vTFU;
        	this.vNF = props.vNF;
        	this.IBSCBSTot = props.IBSCBSTot;
        	this.vTotDFe = props.vTotDFe;
        }
    }
}
