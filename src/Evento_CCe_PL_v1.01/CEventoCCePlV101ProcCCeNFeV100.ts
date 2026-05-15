import { TEventoCCePlV101ProcCCeNFeV100ProcEventoNFe } from './TEventoCCePlV101ProcCCeNFeV100ProcEventoNFe';

export interface IEventoCCePlV101ProcCCeNFeV100 {
  "@class"?: string;
  procEventoNFe?: TEventoCCePlV101ProcCCeNFeV100ProcEventoNFe;
}

export class CEventoCCePlV101ProcCCeNFeV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoCCePlV101ProcCCeNFeV100ProcEventoNFe;

    public constructor(props?: CEventoCCePlV101ProcCCeNFeV100) {
        this["@class"] = ".CEventoCCePlV101ProcCCeNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
