export interface IPlNfGas100ENfgasTiposBasicoV100GMed {
  "@class"?: string;
  dMedAnt?: unknown;
  vMedAnt?: unknown;
  dMedAtu?: unknown;
  vMedAtu?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100GMed {
    public "@class"?: string;

    public dMedAnt?: unknown;
    public vMedAnt?: unknown;
    public dMedAtu?: unknown;
    public vMedAtu?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GMed) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GMed";


        if (props) {

        	this.dMedAnt = props.dMedAnt;
        	this.vMedAnt = props.vMedAnt;
        	this.dMedAtu = props.dMedAtu;
        	this.vMedAtu = props.vMedAtu;
        }
    }
}
