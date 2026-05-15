import { CPlNfGas100EDFeTiposBasicosV100CredPres } from './CPlNfGas100EDFeTiposBasicosV100CredPres';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from './TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfGas100EDFeTiposBasicosV100TcCredPres } from './TPlNfGas100EDFeTiposBasicosV100TcCredPres';

export interface IPlNfGas100EDFeTiposBasicosV100CredPresOper {
  "@class"?: string;
  vBCCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  cCredPres?: TPlNfGas100EDFeTiposBasicosV100TcCredPres;
  gIBSCredPres?: CPlNfGas100EDFeTiposBasicosV100CredPres;
  gCBSCredPres?: CPlNfGas100EDFeTiposBasicosV100CredPres;
}

export class CPlNfGas100EDFeTiposBasicosV100CredPresOper {
    public "@class"?: string;

    public vBCCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
    public cCredPres?: TPlNfGas100EDFeTiposBasicosV100TcCredPres;
    public gIBSCredPres?: CPlNfGas100EDFeTiposBasicosV100CredPres;
    public gCBSCredPres?: CPlNfGas100EDFeTiposBasicosV100CredPres;

    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100CredPresOper) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100CredPresOper";


        if (props) {

        	this.vBCCredPres = props.vBCCredPres;
        	this.cCredPres = props.cCredPres;
        	this.gIBSCredPres = (props.gIBSCredPres) ? new CPlNfGas100EDFeTiposBasicosV100CredPres(props.gIBSCredPres): undefined;
        	this.gCBSCredPres = (props.gCBSCredPres) ? new CPlNfGas100EDFeTiposBasicosV100CredPres(props.gCBSCredPres): undefined;
        }
    }
}
