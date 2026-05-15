import { CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado } from './CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado';

import { CPl010CNt2022002V130LeiauteNFeV400Imposto } from './CPl010CNt2022002V130LeiauteNFeV400Imposto';

import { CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol } from './CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol';

import { CPl010CNt2022002V130LeiauteNFeV400ObsItem } from './CPl010CNt2022002V130LeiauteNFeV400ObsItem';

import { CPl010CNt2022002V130LeiauteNFeV400Prod } from './CPl010CNt2022002V130LeiauteNFeV400Prod';

export interface IPl010CNt2022002V130LeiauteNFeV400Det {
  "@class"?: string;
  prod?: CPl010CNt2022002V130LeiauteNFeV400Prod;
  imposto?: CPl010CNt2022002V130LeiauteNFeV400Imposto;
  impostoDevol?: CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol;
  obsItem?: CPl010CNt2022002V130LeiauteNFeV400ObsItem;
  vItem?: unknown;
  CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado?: CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado;
}

export class CPl010CNt2022002V130LeiauteNFeV400Det {
    public "@class"?: string;

    public prod?: CPl010CNt2022002V130LeiauteNFeV400Prod;
    public imposto?: CPl010CNt2022002V130LeiauteNFeV400Imposto;
    public impostoDevol?: CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol;
    public obsItem?: CPl010CNt2022002V130LeiauteNFeV400ObsItem;
    public vItem?: unknown;
    public CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado?: CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Det) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Det";


        if (props) {

        	this.prod = (props.prod) ? new CPl010CNt2022002V130LeiauteNFeV400Prod(props.prod): undefined;
        	this.imposto = (props.imposto) ? new CPl010CNt2022002V130LeiauteNFeV400Imposto(props.imposto): undefined;
        	this.impostoDevol = (props.impostoDevol) ? new CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol(props.impostoDevol): undefined;
        	this.obsItem = (props.obsItem) ? new CPl010CNt2022002V130LeiauteNFeV400ObsItem(props.obsItem): undefined;
        	this.vItem = props.vItem;
        	this.CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado = (props.CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado) ? new CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado(props.CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado): undefined;
        }
    }
}
