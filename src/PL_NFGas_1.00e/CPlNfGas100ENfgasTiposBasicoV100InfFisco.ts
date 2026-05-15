export interface IPlNfGas100ENfgasTiposBasicoV100InfFisco {
  "@class"?: string;
  xMsg?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100InfFisco {
    public "@class"?: string;

    public xMsg?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100InfFisco) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100InfFisco";


        if (props) {

        	this.xMsg = props.xMsg;
        }
    }
}
