import { TEventoEntregaNFePlV101ProcEventoEntregaNFeV100ProcEventoNFe } from './TEventoEntregaNFePlV101ProcEventoEntregaNFeV100ProcEventoNFe';

export interface IEventoEntregaNFePlV101ProcEventoEntregaNFeV100 {
  "@class"?: string;
  procEventoNFe?: TEventoEntregaNFePlV101ProcEventoEntregaNFeV100ProcEventoNFe;
}

export class CEventoEntregaNFePlV101ProcEventoEntregaNFeV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoEntregaNFePlV101ProcEventoEntregaNFeV100ProcEventoNFe;

    public constructor(props?: CEventoEntregaNFePlV101ProcEventoEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101ProcEventoEntregaNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
