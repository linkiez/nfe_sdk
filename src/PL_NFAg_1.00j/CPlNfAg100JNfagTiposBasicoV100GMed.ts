export interface IPlNfAg100JNfagTiposBasicoV100GMed {
  "@class"?: string;
  dMedAnt?: unknown;
  dMedAtu?: unknown;
}

export class CPlNfAg100JNfagTiposBasicoV100GMed {
    public "@class"?: string;

    public dMedAnt?: unknown;
    public dMedAtu?: unknown;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100GMed) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100GMed";


        if (props) {

        	this.dMedAnt = props.dMedAnt;
        	this.dMedAtu = props.dMedAtu;
        }
    }
}
