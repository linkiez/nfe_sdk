import { TPlNfGas100ENfgasTiposBasicoV100GrContrat } from './TPlNfGas100ENfgasTiposBasicoV100GrContrat';

export interface IPlNfGas100ENfgasTiposBasicoV100GVolContrat {
  "@class"?: string;
  tpVolContrat?: TPlNfGas100ENfgasTiposBasicoV100GrContrat;
  qUnidContrat?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100GVolContrat {
    public "@class"?: string;

    public tpVolContrat?: TPlNfGas100ENfgasTiposBasicoV100GrContrat;
    public qUnidContrat?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100GVolContrat) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100GVolContrat";


        if (props) {

        	this.tpVolContrat = props.tpVolContrat;
        	this.qUnidContrat = props.qUnidContrat;
        }
    }
}
