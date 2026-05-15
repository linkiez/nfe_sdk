import { CPlNfAg100JNfagTiposBasicoV100Cofins } from './CPlNfAg100JNfagTiposBasicoV100Cofins';

import { CPlNfAg100JNfagTiposBasicoV100Fs } from './CPlNfAg100JNfagTiposBasicoV100Fs';

import { CPlNfAg100JNfagTiposBasicoV100Fu } from './CPlNfAg100JNfagTiposBasicoV100Fu';

import { CPlNfAg100JNfagTiposBasicoV100Pis } from './CPlNfAg100JNfagTiposBasicoV100Pis';

import { CPlNfAg100JNfagTiposBasicoV100RetTrib } from './CPlNfAg100JNfagTiposBasicoV100RetTrib';

export interface IPlNfAg100JNfagTiposBasicoV100Imposto {
  "@class"?: string;
  IBSCBS?: unknown;
  CPlNfAg100JNfagTiposBasicoV100Pis?: CPlNfAg100JNfagTiposBasicoV100Pis;
  CPlNfAg100JNfagTiposBasicoV100Cofins?: CPlNfAg100JNfagTiposBasicoV100Cofins;
  retTrib?: CPlNfAg100JNfagTiposBasicoV100RetTrib;
  CPlNfAg100JNfagTiposBasicoV100Fs?: CPlNfAg100JNfagTiposBasicoV100Fs;
  CPlNfAg100JNfagTiposBasicoV100Fu?: CPlNfAg100JNfagTiposBasicoV100Fu;
}

export class CPlNfAg100JNfagTiposBasicoV100Imposto {
    public "@class"?: string;

    public IBSCBS?: unknown;
    public CPlNfAg100JNfagTiposBasicoV100Pis?: CPlNfAg100JNfagTiposBasicoV100Pis;
    public CPlNfAg100JNfagTiposBasicoV100Cofins?: CPlNfAg100JNfagTiposBasicoV100Cofins;
    public retTrib?: CPlNfAg100JNfagTiposBasicoV100RetTrib;
    public CPlNfAg100JNfagTiposBasicoV100Fs?: CPlNfAg100JNfagTiposBasicoV100Fs;
    public CPlNfAg100JNfagTiposBasicoV100Fu?: CPlNfAg100JNfagTiposBasicoV100Fu;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100Imposto) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100Imposto";


        if (props) {

        	this.IBSCBS = props.IBSCBS;
        	this.CPlNfAg100JNfagTiposBasicoV100Pis = (props.CPlNfAg100JNfagTiposBasicoV100Pis) ? new CPlNfAg100JNfagTiposBasicoV100Pis(props.CPlNfAg100JNfagTiposBasicoV100Pis): undefined;
        	this.CPlNfAg100JNfagTiposBasicoV100Cofins = (props.CPlNfAg100JNfagTiposBasicoV100Cofins) ? new CPlNfAg100JNfagTiposBasicoV100Cofins(props.CPlNfAg100JNfagTiposBasicoV100Cofins): undefined;
        	this.retTrib = (props.retTrib) ? new CPlNfAg100JNfagTiposBasicoV100RetTrib(props.retTrib): undefined;
        	this.CPlNfAg100JNfagTiposBasicoV100Fs = (props.CPlNfAg100JNfagTiposBasicoV100Fs) ? new CPlNfAg100JNfagTiposBasicoV100Fs(props.CPlNfAg100JNfagTiposBasicoV100Fs): undefined;
        	this.CPlNfAg100JNfagTiposBasicoV100Fu = (props.CPlNfAg100JNfagTiposBasicoV100Fu) ? new CPlNfAg100JNfagTiposBasicoV100Fu(props.CPlNfAg100JNfagTiposBasicoV100Fu): undefined;
        }
    }
}
