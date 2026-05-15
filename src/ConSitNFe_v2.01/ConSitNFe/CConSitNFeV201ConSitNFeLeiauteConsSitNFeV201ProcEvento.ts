import { CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201Evento } from './CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201Evento';

import { CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetEvento } from './CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetEvento';

import { TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerEvento } from './TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerEvento';

export interface IConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProcEvento {
  "@class"?: string;
  evento?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201Evento;
  retEvento?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetEvento;
  $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerEvento;
}

export class CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProcEvento {
    public "@class"?: string;

    public evento?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201Evento;
    public retEvento?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetEvento;
    public $versao?: TConSitNFeV201ConSitNFeLeiauteConsSitNFeV201VerEvento;

    public constructor(props?: CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProcEvento) {
        this["@class"] = ".CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
