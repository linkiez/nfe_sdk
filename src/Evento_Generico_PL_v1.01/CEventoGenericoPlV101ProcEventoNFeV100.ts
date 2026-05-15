import { TEventoGenericoPlV101ProcEventoNFeV100ProcEventoNFe } from './TEventoGenericoPlV101ProcEventoNFeV100ProcEventoNFe';

export interface IEventoGenericoPlV101ProcEventoNFeV100 {
  "@class"?: string;
  procEventoNFe?: TEventoGenericoPlV101ProcEventoNFeV100ProcEventoNFe;
}

export class CEventoGenericoPlV101ProcEventoNFeV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoGenericoPlV101ProcEventoNFeV100ProcEventoNFe;

    public constructor(props?: CEventoGenericoPlV101ProcEventoNFeV100) {
        this["@class"] = ".CEventoGenericoPlV101ProcEventoNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
