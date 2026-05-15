import { CEventoAtorInteressadoPlV102110150V100DetEvento } from './CEventoAtorInteressadoPlV102110150V100DetEvento';

export interface IEventoAtorInteressadoPlV102110150V100 {
  "@class"?: string;
  detEvento?: CEventoAtorInteressadoPlV102110150V100DetEvento;
}

export class CEventoAtorInteressadoPlV102110150V100 {
    public "@class"?: string;

    public detEvento?: CEventoAtorInteressadoPlV102110150V100DetEvento;

    public constructor(props?: CEventoAtorInteressadoPlV102110150V100) {
        this["@class"] = ".CEventoAtorInteressadoPlV102110150V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoAtorInteressadoPlV102110150V100DetEvento(props.detEvento): undefined;
        }
    }
}
