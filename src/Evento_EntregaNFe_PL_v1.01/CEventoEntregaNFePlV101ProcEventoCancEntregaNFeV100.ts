import { TEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100ProcEventoNFe } from './TEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100ProcEventoNFe';

export interface IEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100 {
  "@class"?: string;
  procEventoNFe?: TEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100ProcEventoNFe;
}

export class CEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100ProcEventoNFe;

    public constructor(props?: CEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101ProcEventoCancEntregaNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
