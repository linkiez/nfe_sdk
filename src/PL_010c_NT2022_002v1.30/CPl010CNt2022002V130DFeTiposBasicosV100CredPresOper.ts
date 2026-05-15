import { CPl010CNt2022002V130DFeTiposBasicosV100CredPres } from './CPl010CNt2022002V130DFeTiposBasicosV100CredPres';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from './TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcCredPres } from './TPl010CNt2022002V130DFeTiposBasicosV100TcCredPres';

export interface IPl010CNt2022002V130DFeTiposBasicosV100CredPresOper {
  "@class"?: string;
  vBCCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  cCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100TcCredPres;
  gIBSCredPres?: CPl010CNt2022002V130DFeTiposBasicosV100CredPres;
  gCBSCredPres?: CPl010CNt2022002V130DFeTiposBasicosV100CredPres;
}

export class CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper {
    public "@class"?: string;

    public vBCCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
    public cCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100TcCredPres;
    public gIBSCredPres?: CPl010CNt2022002V130DFeTiposBasicosV100CredPres;
    public gCBSCredPres?: CPl010CNt2022002V130DFeTiposBasicosV100CredPres;

    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100CredPresOper";


        if (props) {

        	this.vBCCredPres = props.vBCCredPres;
        	this.cCredPres = props.cCredPres;
        	this.gIBSCredPres = (props.gIBSCredPres) ? new CPl010CNt2022002V130DFeTiposBasicosV100CredPres(props.gIBSCredPres): undefined;
        	this.gCBSCredPres = (props.gCBSCredPres) ? new CPl010CNt2022002V130DFeTiposBasicosV100CredPres(props.gCBSCredPres): undefined;
        }
    }
}
