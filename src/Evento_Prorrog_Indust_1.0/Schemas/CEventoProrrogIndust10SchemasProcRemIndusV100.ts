import { TEventoProrrogIndust10SchemasProcRemIndusV100ProcEventoNFe } from './TEventoProrrogIndust10SchemasProcRemIndusV100ProcEventoNFe';

export interface IEventoProrrogIndust10SchemasProcRemIndusV100 {
  "@class"?: string;
  procEventoNFe?: TEventoProrrogIndust10SchemasProcRemIndusV100ProcEventoNFe;
}

export class CEventoProrrogIndust10SchemasProcRemIndusV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoProrrogIndust10SchemasProcRemIndusV100ProcEventoNFe;

    public constructor(props?: CEventoProrrogIndust10SchemasProcRemIndusV100) {
        this["@class"] = ".CEventoProrrogIndust10SchemasProcRemIndusV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
