import { TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerConsSitNFe } from './TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerConsSitNFe';

export interface IConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ConsSitNFe {
  "@class"?: string;
  tpAmb?: unknown;
  chNFe?: unknown;
  $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerConsSitNFe;
}

export class CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ConsSitNFe {
    public "@class"?: string;

    public tpAmb?: unknown;
    public chNFe?: unknown;
    public $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerConsSitNFe;

    public constructor(props?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ConsSitNFe) {
        this["@class"] = ".CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ConsSitNFe";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.chNFe = props.chNFe;
        	this.$versao = props.$versao;
        }
    }
}
