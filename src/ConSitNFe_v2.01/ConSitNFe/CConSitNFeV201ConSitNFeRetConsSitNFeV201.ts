import { TConSitNFeV201ConSitNFeRetConsSitNFeV201RetConsSitNFe } from './TConSitNFeV201ConSitNFeRetConsSitNFeV201RetConsSitNFe';

export interface IConSitNFeV201ConSitNFeRetConsSitNFeV201 {
  "@class"?: string;
  retConsSitNFe?: TConSitNFeV201ConSitNFeRetConsSitNFeV201RetConsSitNFe;
}

export class CConSitNFeV201ConSitNFeRetConsSitNFeV201 {
    public "@class"?: string;

    public retConsSitNFe?: TConSitNFeV201ConSitNFeRetConsSitNFeV201RetConsSitNFe;

    public constructor(props?: CConSitNFeV201ConSitNFeRetConsSitNFeV201) {
        this["@class"] = ".CConSitNFeV201ConSitNFeRetConsSitNFeV201";


        if (props) {

        	this.retConsSitNFe = props.retConsSitNFe;
        }
    }
}
