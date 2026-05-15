import { CPlNfAg100JNfagTiposBasicoV100GProc } from './CPlNfAg100JNfagTiposBasicoV100GProc';

export interface IPlNfAg100JNfagTiposBasicoV100GProcRef {
  "@class"?: string;
  vItem?: unknown;
  qFaturada?: unknown;
  vProd?: unknown;
  gProc?: CPlNfAg100JNfagTiposBasicoV100GProc;
}

export class CPlNfAg100JNfagTiposBasicoV100GProcRef {
    public "@class"?: string;

    public vItem?: unknown;
    public qFaturada?: unknown;
    public vProd?: unknown;
    public gProc?: CPlNfAg100JNfagTiposBasicoV100GProc;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GProcRef) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GProcRef";


        if (props) {

        	this.vItem = props.vItem;
        	this.qFaturada = props.qFaturada;
        	this.vProd = props.vProd;
        	this.gProc = (props.gProc) ? new CPlNfAg100JNfagTiposBasicoV100GProc(props.gProc): undefined;
        }
    }
}
