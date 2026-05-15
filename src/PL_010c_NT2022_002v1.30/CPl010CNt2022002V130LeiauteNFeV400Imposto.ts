import { CPl010CNt2022002V130LeiauteNFeV400Cofinsst } from './CPl010CNt2022002V130LeiauteNFeV400Cofinsst';

import { CPl010CNt2022002V130LeiauteNFeV400IcmsufDest } from './CPl010CNt2022002V130LeiauteNFeV400IcmsufDest';

import { CPl010CNt2022002V130LeiauteNFeV400Pisst } from './CPl010CNt2022002V130LeiauteNFeV400Pisst';

export interface IPl010CNt2022002V130LeiauteNFeV400Imposto {
  "@class"?: string;
  vTotTrib?: unknown;
  CPl010CNt2022002V130LeiauteNFeV400Pisst?: CPl010CNt2022002V130LeiauteNFeV400Pisst;
  CPl010CNt2022002V130LeiauteNFeV400Cofinsst?: CPl010CNt2022002V130LeiauteNFeV400Cofinsst;
  CPl010CNt2022002V130LeiauteNFeV400IcmsufDest?: CPl010CNt2022002V130LeiauteNFeV400IcmsufDest;
  IS?: unknown;
  IBSCBS?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400Imposto {
    public "@class"?: string;

    public vTotTrib?: unknown;
    public CPl010CNt2022002V130LeiauteNFeV400Pisst?: CPl010CNt2022002V130LeiauteNFeV400Pisst;
    public CPl010CNt2022002V130LeiauteNFeV400Cofinsst?: CPl010CNt2022002V130LeiauteNFeV400Cofinsst;
    public CPl010CNt2022002V130LeiauteNFeV400IcmsufDest?: CPl010CNt2022002V130LeiauteNFeV400IcmsufDest;
    public IS?: unknown;
    public IBSCBS?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Imposto) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Imposto";


        if (props) {

        	this.vTotTrib = props.vTotTrib;
        	this.CPl010CNt2022002V130LeiauteNFeV400Pisst = (props.CPl010CNt2022002V130LeiauteNFeV400Pisst) ? new CPl010CNt2022002V130LeiauteNFeV400Pisst(props.CPl010CNt2022002V130LeiauteNFeV400Pisst): undefined;
        	this.CPl010CNt2022002V130LeiauteNFeV400Cofinsst = (props.CPl010CNt2022002V130LeiauteNFeV400Cofinsst) ? new CPl010CNt2022002V130LeiauteNFeV400Cofinsst(props.CPl010CNt2022002V130LeiauteNFeV400Cofinsst): undefined;
        	this.CPl010CNt2022002V130LeiauteNFeV400IcmsufDest = (props.CPl010CNt2022002V130LeiauteNFeV400IcmsufDest) ? new CPl010CNt2022002V130LeiauteNFeV400IcmsufDest(props.CPl010CNt2022002V130LeiauteNFeV400IcmsufDest): undefined;
        	this.IS = props.IS;
        	this.IBSCBS = props.IBSCBS;
        }
    }
}
