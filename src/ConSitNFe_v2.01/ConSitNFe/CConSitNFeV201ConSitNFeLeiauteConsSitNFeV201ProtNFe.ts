import { CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfProt } from './CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfProt';

import { TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerNFe } from './TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerNFe';

export interface IConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProtNFe {
  "@class"?: string;
  unknown?: unknown;
  infProt?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfProt;
  $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerNFe;
}

export class CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProtNFe {
    public "@class"?: string;

    public unknown?: unknown;
    public infProt?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfProt;
    public $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerNFe;

    public constructor(props?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProtNFe) {
        this["@class"] = ".CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProtNFe";


        if (props) {

        	this.unknown = props.unknown;
        	this.infProt = (props.infProt) ? new CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfProt(props.infProt): undefined;
        	this.$versao = props.$versao;
        }
    }
}
