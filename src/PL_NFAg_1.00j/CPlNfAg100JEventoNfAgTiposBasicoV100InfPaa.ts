export interface IPlNfAg100JEventoNfAgTiposBasicoV100InfPaa {
  "@class"?: string;
  CNPJPAA?: unknown;
}

export class CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa {
    public "@class"?: string;

    public CNPJPAA?: unknown;

    public constructor(props?: CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa) {
        this["@class"] = ".CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa";


        if (props) {

        	this.CNPJPAA = props.CNPJPAA;
        }
    }
}
