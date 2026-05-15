import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from './TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

export interface IPlNfAg100JDFeTiposBasicosV100GMonoReten {
  "@class"?: string;
  qBCMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
  adRemIBSReten?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vIBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  adRemCBSReten?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  vCBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}

export class CPlNfAg100JDFeTiposBasicosV100GMonoReten {
    public "@class"?: string;

    public qBCMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
    public adRemIBSReten?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vIBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
    public adRemCBSReten?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    public vCBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;

    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100GMonoReten) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100GMonoReten";


        if (props) {

        	this.qBCMonoReten = props.qBCMonoReten;
        	this.adRemIBSReten = props.adRemIBSReten;
        	this.vIBSMonoReten = props.vIBSMonoReten;
        	this.adRemCBSReten = props.adRemCBSReten;
        	this.vCBSMonoReten = props.vCBSMonoReten;
        }
    }
}
