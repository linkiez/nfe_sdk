import { CPlNfGas100ENfgasTiposBasicoV100IcmsTot } from './CPlNfGas100ENfgasTiposBasicoV100IcmsTot';

import { CPlNfGas100ENfgasTiposBasicoV100VRetTribTot } from './CPlNfGas100ENfgasTiposBasicoV100VRetTribTot';

export interface IPlNfGas100ENfgasTiposBasicoV100Total {
  "@class"?: string;
  vProd?: unknown;
  CPlNfGas100ENfgasTiposBasicoV100IcmsTot?: CPlNfGas100ENfgasTiposBasicoV100IcmsTot;
  vRetTribTot?: CPlNfGas100ENfgasTiposBasicoV100VRetTribTot;
  vCOFINS?: unknown;
  vPIS?: unknown;
  vTxReg?: unknown;
  vNF?: unknown;
  IBSCBSTot?: unknown;
  vTotDFe?: unknown;
}

export class CPlNfGas100ENfgasTiposBasicoV100Total {
    public "@class"?: string;

    public vProd?: unknown;
    public CPlNfGas100ENfgasTiposBasicoV100IcmsTot?: CPlNfGas100ENfgasTiposBasicoV100IcmsTot;
    public vRetTribTot?: CPlNfGas100ENfgasTiposBasicoV100VRetTribTot;
    public vCOFINS?: unknown;
    public vPIS?: unknown;
    public vTxReg?: unknown;
    public vNF?: unknown;
    public IBSCBSTot?: unknown;
    public vTotDFe?: unknown;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100Total) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100Total";


        if (props) {

        	this.vProd = props.vProd;
        	this.CPlNfGas100ENfgasTiposBasicoV100IcmsTot = (props.CPlNfGas100ENfgasTiposBasicoV100IcmsTot) ? new CPlNfGas100ENfgasTiposBasicoV100IcmsTot(props.CPlNfGas100ENfgasTiposBasicoV100IcmsTot): undefined;
        	this.vRetTribTot = (props.vRetTribTot) ? new CPlNfGas100ENfgasTiposBasicoV100VRetTribTot(props.vRetTribTot): undefined;
        	this.vCOFINS = props.vCOFINS;
        	this.vPIS = props.vPIS;
        	this.vTxReg = props.vTxReg;
        	this.vNF = props.vNF;
        	this.IBSCBSTot = props.IBSCBSTot;
        	this.vTotDFe = props.vTotDFe;
        }
    }
}
