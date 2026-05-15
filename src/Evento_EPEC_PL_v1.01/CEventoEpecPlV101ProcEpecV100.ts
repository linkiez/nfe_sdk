import { TEventoEpecPlV101ProcEpecV100ProcEventoNFe } from './TEventoEpecPlV101ProcEpecV100ProcEventoNFe';

export interface IEventoEpecPlV101ProcEpecV100 {
  "@class"?: string;
  procEventoNFe?: TEventoEpecPlV101ProcEpecV100ProcEventoNFe;
}

export class CEventoEpecPlV101ProcEpecV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoEpecPlV101ProcEpecV100ProcEventoNFe;

    public constructor(props?: CEventoEpecPlV101ProcEpecV100) {
        this["@class"] = ".CEventoEpecPlV101ProcEpecV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
