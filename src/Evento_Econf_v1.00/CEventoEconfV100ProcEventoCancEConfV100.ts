import { TEventoEconfV100ProcEventoCancEConfV100ProcEventoNFe } from './TEventoEconfV100ProcEventoCancEConfV100ProcEventoNFe';

export interface IEventoEconfV100ProcEventoCancEConfV100 {
  "@class"?: string;
  procEventoNFe?: TEventoEconfV100ProcEventoCancEConfV100ProcEventoNFe;
}

export class CEventoEconfV100ProcEventoCancEConfV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoEconfV100ProcEventoCancEConfV100ProcEventoNFe;

    public constructor(props?: CEventoEconfV100ProcEventoCancEConfV100) {
        this["@class"] = ".CEventoEconfV100ProcEventoCancEConfV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
