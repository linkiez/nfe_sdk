import { TEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100ProcEventoNFe } from './TEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100ProcEventoNFe';

export interface IEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100 {
  "@class"?: string;
  procEventoNFe?: TEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100ProcEventoNFe;
}

export class CEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100ProcEventoNFe;

    public constructor(props?: CEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102ProcEventoInsucessoNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
