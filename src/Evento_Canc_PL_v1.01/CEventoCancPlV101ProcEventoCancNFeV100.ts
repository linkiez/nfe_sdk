import { TEventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe } from './TEventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe';

export interface IEventoCancPlV101ProcEventoCancNFeV100 {
  "@class"?: string;
  procEventoNFe?: TEventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe;
}

export class CEventoCancPlV101ProcEventoCancNFeV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe;

    public constructor(props?: CEventoCancPlV101ProcEventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101ProcEventoCancNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
