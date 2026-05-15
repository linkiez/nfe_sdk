import { CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento } from './CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento';

import { TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerEvento } from './TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerEvento';

export interface IConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento;
  $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerEvento;
}

export class CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento;
    public $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerEvento;

    public constructor(props?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetEvento) {
        this["@class"] = ".CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
