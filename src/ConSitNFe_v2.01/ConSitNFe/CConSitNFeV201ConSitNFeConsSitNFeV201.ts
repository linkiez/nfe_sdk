import { TConSitNFeV201ConSitNFeConsSitNFeV201ConsSitNFe } from './TConSitNFeV201ConSitNFeConsSitNFeV201ConsSitNFe';

export interface IConSitNFeV201ConSitNFeConsSitNFeV201 {
  "@class"?: string;
  consSitNFe?: TConSitNFeV201ConSitNFeConsSitNFeV201ConsSitNFe;
}

export class CConSitNFeV201ConSitNFeConsSitNFeV201 {
    public "@class"?: string;

    public consSitNFe?: TConSitNFeV201ConSitNFeConsSitNFeV201ConsSitNFe;

    public constructor(props?: CConSitNFeV201ConSitNFeConsSitNFeV201) {
        this["@class"] = ".CConSitNFeV201ConSitNFeConsSitNFeV201";


        if (props) {

        	this.consSitNFe = props.consSitNFe;
        }
    }
}
