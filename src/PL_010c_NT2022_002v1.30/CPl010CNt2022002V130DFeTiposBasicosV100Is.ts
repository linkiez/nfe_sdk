import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from './TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from './TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

export interface IPl010CNt2022002V130DFeTiposBasicosV100Is {
  "@class"?: string;
  CSTIS?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
  cClassTribIS?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100Is {
    public "@class"?: string;

    public CSTIS?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
    public cClassTribIS?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Is) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Is";


        if (props) {

        	this.CSTIS = props.CSTIS;
        	this.cClassTribIS = props.cClassTribIS;
        }
    }
}
