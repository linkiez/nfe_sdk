import { TEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100ProcEventoNFe } from './TEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100ProcEventoNFe';

export interface IEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100 {
  "@class"?: string;
  procEventoNFe?: TEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100ProcEventoNFe;
}

export class CEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100ProcEventoNFe;

    public constructor(props?: CEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100) {
        this["@class"] = ".CEventoAtorInteressadoPlV102ProcEventoAtorInteressadoV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
