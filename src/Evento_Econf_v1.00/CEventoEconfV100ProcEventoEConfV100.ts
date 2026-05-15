import { TEventoEconfV100ProcEventoEConfV100ProcEventoNFe } from './TEventoEconfV100ProcEventoEConfV100ProcEventoNFe';

export interface IEventoEconfV100ProcEventoEConfV100 {
  "@class"?: string;
  procEventoNFe?: TEventoEconfV100ProcEventoEConfV100ProcEventoNFe;
}

export class CEventoEconfV100ProcEventoEConfV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoEconfV100ProcEventoEConfV100ProcEventoNFe;

    public constructor(props?: CEventoEconfV100ProcEventoEConfV100) {
        this["@class"] = ".CEventoEconfV100ProcEventoEConfV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
