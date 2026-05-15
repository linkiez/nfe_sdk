import { CPlNfAg100JNfagTiposBasicoV100InfFisco } from './CPlNfAg100JNfagTiposBasicoV100InfFisco';

import { CPlNfAg100JNfagTiposBasicoV100InfProt } from './CPlNfAg100JNfagTiposBasicoV100InfProt';

import { TPlNfAg100JNfagTiposBasicoV100VerNfAg } from './TPlNfAg100JNfagTiposBasicoV100VerNfAg';

export interface IPlNfAg100JNfagTiposBasicoV100ProtNfAg {
  "@class"?: string;
  unknown?: unknown;
  infProt?: CPlNfAg100JNfagTiposBasicoV100InfProt;
  infFisco?: CPlNfAg100JNfagTiposBasicoV100InfFisco;
  $versao?: TPlNfAg100JNfagTiposBasicoV100VerNfAg;
}

export class CPlNfAg100JNfagTiposBasicoV100ProtNfAg {
    public "@class"?: string;

    public unknown?: unknown;
    public infProt?: CPlNfAg100JNfagTiposBasicoV100InfProt;
    public infFisco?: CPlNfAg100JNfagTiposBasicoV100InfFisco;
    public $versao?: TPlNfAg100JNfagTiposBasicoV100VerNfAg;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100ProtNfAg) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100ProtNfAg";


        if (props) {

        	this.unknown = props.unknown;
        	this.infProt = (props.infProt) ? new CPlNfAg100JNfagTiposBasicoV100InfProt(props.infProt): undefined;
        	this.infFisco = (props.infFisco) ? new CPlNfAg100JNfagTiposBasicoV100InfFisco(props.infFisco): undefined;
        	this.$versao = props.$versao;
        }
    }
}
