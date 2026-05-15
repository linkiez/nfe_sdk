import { TPlNfGas100EDFeTiposBasicosV100Cst } from './TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from './TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

export interface IPlNfGas100EDFeTiposBasicosV100Is {
  "@class"?: string;
  CSTIS?: TPlNfGas100EDFeTiposBasicosV100Cst;
  cClassTribIS?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
}

export class CPlNfGas100EDFeTiposBasicosV100Is {
    public "@class"?: string;

    public CSTIS?: TPlNfGas100EDFeTiposBasicosV100Cst;
    public cClassTribIS?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100Is) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100Is";


        if (props) {

        	this.CSTIS = props.CSTIS;
        	this.cClassTribIS = props.cClassTribIS;
        }
    }
}
