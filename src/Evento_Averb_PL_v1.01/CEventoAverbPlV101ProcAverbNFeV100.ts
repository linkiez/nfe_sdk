import { TEventoAverbPlV101ProcAverbNFeV100ProcEventoNFe } from './TEventoAverbPlV101ProcAverbNFeV100ProcEventoNFe';

export interface IEventoAverbPlV101ProcAverbNFeV100 {
  "@class"?: string;
  procEventoNFe?: TEventoAverbPlV101ProcAverbNFeV100ProcEventoNFe;
}

export class CEventoAverbPlV101ProcAverbNFeV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoAverbPlV101ProcAverbNFeV100ProcEventoNFe;

    public constructor(props?: CEventoAverbPlV101ProcAverbNFeV100) {
        this["@class"] = ".CEventoAverbPlV101ProcAverbNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
