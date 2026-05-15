import { TPlNfAg100JDFeTiposBasicosV100Cst } from './TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from './TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

export interface IPlNfAg100JDFeTiposBasicosV100Is {
  "@class"?: string;
  CSTIS?: TPlNfAg100JDFeTiposBasicosV100Cst;
  cClassTribIS?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
}

export class CPlNfAg100JDFeTiposBasicosV100Is {
    public "@class"?: string;

    public CSTIS?: TPlNfAg100JDFeTiposBasicosV100Cst;
    public cClassTribIS?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Is) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Is";


        if (props) {

        	this.CSTIS = props.CSTIS;
        	this.cClassTribIS = props.cClassTribIS;
        }
    }
}
