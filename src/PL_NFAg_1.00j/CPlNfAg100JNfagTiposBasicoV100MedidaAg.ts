import { TPlNfAg100JNfagTiposBasicoV100UMedItemAg } from './TPlNfAg100JNfagTiposBasicoV100UMedItemAg';

export interface IPlNfAg100JNfagTiposBasicoV100MedidaAg {
  "@class"?: string;
  vUnidConsumo?: unknown;
  uMed?: TPlNfAg100JNfagTiposBasicoV100UMedItemAg;
  vMedAnt?: unknown;
  vMedAtu?: unknown;
  vConst?: unknown;
  vMed?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100MedidaAg {
    public "@class"?: string;

    public vUnidConsumo?: unknown;
    public uMed?: TPlNfAg100JNfagTiposBasicoV100UMedItemAg;
    public vMedAnt?: unknown;
    public vMedAtu?: unknown;
    public vConst?: unknown;
    public vMed?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100MedidaAg) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100MedidaAg";


        if (props) {

        	this.vUnidConsumo = props.vUnidConsumo;
        	this.uMed = props.uMed;
        	this.vMedAnt = props.vMedAnt;
        	this.vMedAtu = props.vMedAtu;
        	this.vConst = props.vConst;
        	this.vMed = props.vMed;
        }
    }
}
