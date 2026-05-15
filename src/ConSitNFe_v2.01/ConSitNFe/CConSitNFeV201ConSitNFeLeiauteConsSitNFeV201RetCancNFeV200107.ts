import { CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfCanc } from './CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfCanc';

import { TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerCancNFeV200107 } from './TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerCancNFeV200107';

export interface IConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107 {
  "@class"?: string;
  unknown?: unknown;
  infCanc?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfCanc;
  $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerCancNFeV200107;
}

export class CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107 {
    public "@class"?: string;

    public unknown?: unknown;
    public infCanc?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfCanc;
    public $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerCancNFeV200107;

    public constructor(props?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107) {
        this["@class"] = ".CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107";


        if (props) {

        	this.unknown = props.unknown;
        	this.infCanc = (props.infCanc) ? new CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfCanc(props.infCanc): undefined;
        	this.$versao = props.$versao;
        }
    }
}
