import { CPl010CNt2022002V130LeiauteNFeV400IcmsTot } from './CPl010CNt2022002V130LeiauteNFeV400IcmsTot';

import { CPl010CNt2022002V130LeiauteNFeV400IssqNtot } from './CPl010CNt2022002V130LeiauteNFeV400IssqNtot';

import { CPl010CNt2022002V130LeiauteNFeV400RetTrib } from './CPl010CNt2022002V130LeiauteNFeV400RetTrib';

export interface IPl010CNt2022002V130LeiauteNFeV400Total {
  "@class"?: string;
  CPl010CNt2022002V130LeiauteNFeV400IcmsTot?: CPl010CNt2022002V130LeiauteNFeV400IcmsTot;
  CPl010CNt2022002V130LeiauteNFeV400IssqNtot?: CPl010CNt2022002V130LeiauteNFeV400IssqNtot;
  retTrib?: CPl010CNt2022002V130LeiauteNFeV400RetTrib;
  ISTot?: unknown;
  IBSCBSTot?: unknown;
  vNFTot?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Total {
    public "@class"?: string;

    public CPl010CNt2022002V130LeiauteNFeV400IcmsTot?: CPl010CNt2022002V130LeiauteNFeV400IcmsTot;
    public CPl010CNt2022002V130LeiauteNFeV400IssqNtot?: CPl010CNt2022002V130LeiauteNFeV400IssqNtot;
    public retTrib?: CPl010CNt2022002V130LeiauteNFeV400RetTrib;
    public ISTot?: unknown;
    public IBSCBSTot?: unknown;
    public vNFTot?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Total) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Total";


        if (props) {

        	this.CPl010CNt2022002V130LeiauteNFeV400IcmsTot = (props.CPl010CNt2022002V130LeiauteNFeV400IcmsTot) ? new CPl010CNt2022002V130LeiauteNFeV400IcmsTot(props.CPl010CNt2022002V130LeiauteNFeV400IcmsTot): undefined;
        	this.CPl010CNt2022002V130LeiauteNFeV400IssqNtot = (props.CPl010CNt2022002V130LeiauteNFeV400IssqNtot) ? new CPl010CNt2022002V130LeiauteNFeV400IssqNtot(props.CPl010CNt2022002V130LeiauteNFeV400IssqNtot): undefined;
        	this.retTrib = (props.retTrib) ? new CPl010CNt2022002V130LeiauteNFeV400RetTrib(props.retTrib): undefined;
        	this.ISTot = props.ISTot;
        	this.IBSCBSTot = props.IBSCBSTot;
        	this.vNFTot = props.vNFTot;
        }
    }
}
